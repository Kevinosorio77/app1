import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function OpcionesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opciones</Text>
      <Button title="Ver Rutina" onPress={() => navigation.navigate("Rutina")} />
      <Button title="Comidas" onPress={() => navigation.navigate("Comidas")} />
      <Button title="Cardio" onPress={() => navigation.navigate("Cardio")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});
