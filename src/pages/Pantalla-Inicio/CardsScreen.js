import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ejercicios = [
  { id: "1", nombre: "Press de banca", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { id: "2", nombre: "Sentadillas", img: "https://cdn-icons-png.flaticon.com/512/1046/1046769.png" },
  { id: "3", nombre: "Curl de bíceps", img: "https://cdn-icons-png.flaticon.com/512/1046/1046750.png" },
  { id: "4", nombre: "Peso muerto", img: "https://cdn-icons-png.flaticon.com/512/1046/1046780.png" },
];

export default function CardsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ejercicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.name}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});