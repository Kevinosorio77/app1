import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

// Pantallas
import HomeScreen from "./src/pages/Pantalla-Inicio/HomeScreen";
import OpcionesScreen from "./src/pages/OpcionesScreen";
import RutinaScreen from "./src/pages/RutinaScreen";
import ComidasScreen from "./src/pages/ComidasScreen";
import CardioScreen from "./src/pages/CardioScreen";
import PerfilScreen from "./src/pages/PerfilScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function OpcionesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Opciones" component={OpcionesScreen} />
      <Stack.Screen name="Rutina" component={RutinaScreen} />
      <Stack.Screen name="Comidas" component={ComidasScreen} />
      <Stack.Screen name="Cardio" component={CardioScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [dark, setDark] = React.useState(false);

  return (
    <NavigationContainer theme={dark ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        screenOptions={{
          headerRight: () => (
            <Button
              title={dark ? "☀️" : "🌙"}
              onPress={() => setDark(!dark)}
            />
          ),
        }}
      >
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Opciones" component={OpcionesStack} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
