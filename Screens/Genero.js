import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Card, Input, Button, Text } from "@rneui/themed";
import axios from "axios";

class Genero extends Component {
  //Constructor
  constructor(props) {
    super(props);

    this.state = {
      personaData: null,
      name: "",
      loading: false,
      url: "https://api.genderize.io/?name=",
    };
  }

  componentDidMount() {
    // Realizar la solicitud a la API cuando el componente se monta
    axios
      .get(this.state.url + this.state.name)
      .then((response) => {
        // Guardar los datos de género en el estado del componente
        this.setState({ personaData: response.data });
      })
      .catch((error) => {
        console.error(error);
        loading: false;
      });
  }

  getGeneroEspanol() {
    if (this.state.personaData) {
      const gender = this.state.personaData.gender;
      if( gender === 'male') {
        return 'Nombre masculino';
      }else if ( gender === 'female') {
        return 'Nombre femenino';
    }else {
      return 'Nombre desconocido';
    }
  }
}

  getColorPorGenero() {
    if (this.state.personaData) {
      const gender = this.state.personaData.gender;
      if(gender === 'male'){
        return 'blue';
      }else if (gender === 'female'){
        return 'pink';
    } else { 
      return 'grey';
    }
  }
}


  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.container}>
          <Card.Title h3>Genero </Card.Title>
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
              <Text margin={10} h4 style={{ color: this.getColorPorGenero() }}>
                {this.getGeneroEspanol()}
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
  },
  container: {
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default Genero;
