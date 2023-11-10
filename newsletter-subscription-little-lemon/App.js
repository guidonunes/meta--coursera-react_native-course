import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { createNativeStackNavigator } from  '@react-navigation/native-stack';

import SubscribeScreen from './screens/SubscribeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
// App.js is already setup by wrapping NavigationContainer around Root Navigator
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
