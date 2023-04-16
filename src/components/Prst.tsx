import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Prst = () => {
  const [nilai, ubahNilai] = useState(0);

  return (
    <View>
      <TouchableOpacity onPress={() => ubahNilai(nilai + 1)}>
        <View>
          <Text
            style={{
              fontSize: 40,
              color: 'blue',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Tambah
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 60,
            color: 'black',
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          {nilai}
        </Text>
      </View>
      <TouchableOpacity onPress={() => ubahNilai(nilai - 1)}>
        <View>
          <Text
            style={{
              fontSize: 40,
              color: 'blue',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Kurang
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Prst;

const styles = StyleSheet.create({});
