import * as React from "react";
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Menu" component={SubscribeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
