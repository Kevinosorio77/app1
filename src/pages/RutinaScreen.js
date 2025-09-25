import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export default function RutinaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutina semanal</Text>
      <FlatList
        data={dias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}: Ejercicios del día</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18, paddingVertical: 5 },
});
