import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardio</Text>
      <Text>Correr 30 minutos</Text>
      <Text>Bicicleta 20 minutos</Text>
      <Text>Elíptica 15 minutos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
