import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/pages/Pantalla-Inicio/HomeScreen";
import CardsScreen from "./src/pages/Pantalla-Inicio/CardsScreen";
import LoginScreen from "./src/pages/Pantalla-Inicio/LoginScreen";
import RegisterScreen from "./src/pages/Pantalla-Inicio/RegisterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cards" component={CardsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}