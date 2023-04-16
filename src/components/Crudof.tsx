import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface item {
  item: string;
}

const Crudof = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<item[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [editMode, setEditMode] = useState<boolean>(false);

  const create = (text: string) => {
    setData(prev => {
      const newData = [...prev, {item: text}];
      console.log(newData);
      saveDate(newData);
      return newData;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const saveDate = async (value: Array<{item: string}>) => {
    try {
      await AsyncStorage.setItem('database', JSON.stringify(value));
    } catch (o) {
      console.log('save data error', o);
    }
  };

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
      if (value !== null) {
        const perseValue = JSON.parse(value);
        console.log(perseValue);
        setData(perseValue);
      }
    } catch (error) {
      console.log('get data error', error);
    }
  };

  const editData = () => {
    const newData = [...data];
    newData[index].item = text;
    setData(newData);
    setText('');
    setEditMode(false);
    saveDate(newData);
  };

  const deleteData = () => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    saveDate(newData);
    setEditMode(false);
  };

  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <View>
          {data.map((value, index) => (
            <TouchableOpacity
              onPress={() => {
                setText(value.item);
                setIndex(index);
                setEditMode(true);
              }}
              key={index}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  borderRadius: 20,
                  borderWidth: 2,
                  top: 20,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                    left: 10,
                  }}
                  key={index}>
                  {index}.{value.item}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIndex(index);
                  deleteData();
                }}>
                <View
                  style={{
                    backgroundColor: 'red',
                    borderWidth: 1,
                    width: 20,
                    left: 400,
                    bottom: 12,
                  }}>
                  <Text style={{}}>x</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
        <TextInput
          value={text}
          onChangeText={f => setText(f)}
          style={{borderWidth: 2, width: 300}}
          placeholder="wuuw"
        />

        {editMode ? (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}>
            <View
              style={{
                borderWidth: 1,
                backgroundColor: 'blue',
                justifyContent: 'center',
                width: 75,
                height: 50,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                edit
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}>
            <View
              style={{
                borderWidth: 1,
                backgroundColor: 'blue',
                justifyContent: 'center',
                width: 75,
                height: 50,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Tambah
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Crudof;

const styles = StyleSheet.create({});
