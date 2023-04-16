import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pindah} from '../router/Index';
import React from 'react';

const Tesn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Pindah>>();
  setTimeout(() => {
    navigation.navigate('Learn');
  }, 3000);
  return (
    <View>
      <Text onPress={() => navigation.navigate('Learn')}>Tesn</Text>
    </View>
  );
};

export default Tesn;

const styles = StyleSheet.create({});
