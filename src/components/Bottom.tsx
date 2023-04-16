import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Learn from './Learn';
import Drawer from './Drawer';
import Tesn from './Tesn';
import Crudof from './Crudof';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Drawer" component={Drawer} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Tesn" component={Tesn} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Crudof"
        component={Crudof}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
