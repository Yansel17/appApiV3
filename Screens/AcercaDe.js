import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";

const Contratame = () => {
  const url = "../assets/yo.png";

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover
          style={styles.cardCover}
          source={require(url)} // Asegúrate de que la ruta sea correcta
        />
        <Text style={styles.titulo}>Yansel Martinez</Text>
        <Text style={styles.subtitulo}>Desarrollador de Software</Text>
        <Text style={styles.contacto}>Contacto:</Text>
        <Text style={styles.enlace}>yanselj6@gmail.com</Text>
        <Text style={styles.enlace}>GitHub: Yansel17</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Fondo más claro
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 300,
    height: 350,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#ffffff", // Fondo blanco
    elevation: 4, 
    backgroundColor: '#fff',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cardCover: {
    width: 100,
    height: 100,
    alignSelf: "center", // Alinea la imagen horizontalmente al centro
    marginTop: 10, // Ajusta el margen superior
    borderRadius: 50, // Borde redondeado para la imagen
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Texto más oscuro
    marginTop: 10,
    textAlign: "center",
    
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555", // Texto un poco más oscuro
    textAlign: "center",
  },
  contacto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0077b6", // Azul oscuro elegante
    marginTop: 10,
    textAlign: "center",
  },
  enlace: {
    fontSize: 16,
    color: "#0077b6", 
    textAlign: "center",
  },
});

export default Contratame;
