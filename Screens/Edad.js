import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { Card, Input, Button, Text, Image } from "@rneui/themed";
import axios from "axios";

class Edad extends Component {
  //Constructor
  constructor(props) {
    super(props);

    this.state = {
      personaData: null,
      name: "",
      url: "https://api.agify.io/?name=",
    };
  }

  componentDidMount() {
    // Realizar la solicitud a la API cuando el componente se monta
    axios
      .get(this.state.url + this.state.name)
      .then((response) => {
        // Guardar los datos de Edad en el estado del componente
        this.setState({ personaData: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getEdadTexto() {
    if (this.state.personaData) {
      const edad = this.state.personaData.age;
      if (edad >= 60) {
        return (
          <View>
            <Image
              source={require("../assets/Edad/anciano.jpg")}
              style={styles.imagen}
            />
            <Text margin={10} style={styles.texto}>
              {edad} años, es anciano/a
            </Text>
          </View>
        );
      } else if (edad >= 18) {
        return (
          <View>
            <Image
              source={require("../assets/Edad/adulto.jpg")}
              style={styles.imagen}
            />
            <Text margin={10} style={styles.texto}>
              {edad} años, es adulto/a
            </Text>
          </View>
        );
      } else if (edad >= 3) {
        return (
          <View>
            <Image
              source={require("../assets/Edad/joven.jpg")}
              style={styles.imagen}
            />
            <Text margin={10} style={styles.texto}>
              {edad} años, es joven
            </Text>
          </View>
        );
      } else {
        return (
          <View>
            <View style={styles.containerImg}>
              <Image
                source={require("../assets/Edad/anciano.jpg")}
                style={styles.imagen}
              />
            </View>
            <Text margin={10} style={styles.texto}>
              Sin resultados...
            </Text>
          </View>
        );
      }
    }
  }

  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.container}>
          <Card.Title h3>Edad </Card.Title>
          <Card.Divider />
          <View>
            <Text h4> Nombre: </Text>
            <Input
              style={styles.input}
              placeholder="Ingrese un nombre"
              value={this.state.name}
              onChangeText={(text) => this.setState({ name: text })}
            />
            {this.state.personaData ? (
              <Text margin={10} h4>
                {this.getEdadTexto()}
              </Text>
            ) : (
              <ActivityIndicator color="blue" />
            )}
            <Button
              title="Revelar"
              type="clear"
              size="lg"
              onPress={() => {
                this.componentDidMount();
              }}
            />
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",

  },
  container: {
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    width: "100%",
  },
  texto: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 15,
  },
  containerImg: {
    alignItems: "center",
    alignContent: "center",
    width: 260,
  },
});

export default Edad;
