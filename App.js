import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import TitleScreen from './components/TitleScreen';
import Profile from './components/Profile';
import { GradebookContext } from './components/GradebookContext';

export default function App() {
  const Stack = createStackNavigator();
  const [thresholds, setThresholds] = useState([90, 80, 70]);
  const [gradeBook, setGradeBook] = useState([]);
  const [totalBonusPoints, setTotalBonusPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lowScore, setLowScore] = useState(0);

  return (
    <GradebookContext.Provider
      value={{
        thresholds,
        setThresholds,
        gradeBook,
        setGradeBook,
        totalBonusPoints,
        setTotalBonusPoints,
        highScore,
        setHighScore,
        lowScore,
        setLowScore,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Title" component={TitleScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </GradebookContext.Provider>
  );
}
