import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ComidasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan de comidas</Text>
      <Text>- Desayuno: Avena y frutas</Text>
      <Text>- Comida: Pollo y ensalada</Text>
      <Text>- Cena: Pescado con verduras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
