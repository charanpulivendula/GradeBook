import React, { useState } from 'react';
import { View,Text } from 'react-native';
// import TitleScreen from './components/TitleScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import TitleScreen from './components/TitleScreen';
import Profile from './components/Profile';

export default function App() {
 
  const Stack = createStackNavigator();

  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Title" component={TitleScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

