import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagen de culturista */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=60",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Bienvenido a la Vida Fit</Text>

      {/* Botón principal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cards")}
      >
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c", // Fondo oscuro elegante
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e91e63", // Rosa fuerte fitness
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
