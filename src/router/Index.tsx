import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Learn from '../components/Learn';
import Tesn from '../components/Tesn';

export type Pindah = {
  Tesn: undefined;
  Learn: undefined;
};

const Stack = createNativeStackNavigator<Pindah>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tesn" component={Tesn} />
        <Stack.Screen name="Learn" component={Learn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
