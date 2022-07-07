import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './Feed';
import Profile from './Profile';
import Search from './Search';

const Tab=createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name='Feed'
            component={Feed}
        />
        <Tab.Screen
            name='Profile'
            component={Profile}
        />
        <Tab.Screen
            name='Search'
            component={Search}
        />
    </Tab.Navigator>
  )
}