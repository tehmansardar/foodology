import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import Action from '../screens/Action';
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';
import HeightWeight from '../screens/HeightWeight';
import Age from '../screens/Age';
import Sex from '../screens/Sex';
import Ethnicity from '../screens/Ethnicity';
import MaritalStatus from '../screens/MaritalStatus';
import Children from '../screens/Children';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Action'} component={Action} />
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'HeightWeight'} component={HeightWeight} />
        <Stack.Screen name={'Age'} component={Age} />
        <Stack.Screen name={'Sex'} component={Sex} />
        <Stack.Screen name={'Ethnicity'} component={Ethnicity} />
        <Stack.Screen name={'MaritalStatus'} component={MaritalStatus} />
        <Stack.Screen name={'Children'} component={Children} />
        <Stack.Screen name={'HomeScreen'} component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
