import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PerfilScreen() {
  const [sesion, setSesion] = useState(false);

  return (
    <View style={styles.container}>
      {sesion ? (
        <>
          <Text style={styles.title}>Sesión iniciada</Text>
          <Button title="Cerrar sesión" onPress={() => setSesion(false)} />
        </>
      ) : (
        <>
          <Text style={styles.title}>No has iniciado sesión</Text>
          <Button title="Iniciar sesión" onPress={() => setSesion(true)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});
