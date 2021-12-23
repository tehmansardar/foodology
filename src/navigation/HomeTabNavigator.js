import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Fonts, Images, Colors} from '../assets/Theme';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/Home';
import Analytics from '../screens/Analytics';
import Suggestions from '../screens/Suggestions';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelStyle: {
          borderWidth: 0.5,
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="analytics-sharp" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Suggestions"
        component={Suggestions}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="document-text" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
