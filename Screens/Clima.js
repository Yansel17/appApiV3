import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Card, Text, Icon } from "@rneui/themed";
import axios from "axios";

class Clima extends Component {
  constructor(props) {
    super(props);

    this.state = {
      climaData: {},
      url: "https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,DO&appid=6c4325dcf6eb4ae262822e0b62d23d7e&units=metric",
      loading: false,
    };
  }

  componentDidMount = () => {
    if (this.state.url) {
      this.setState({ loading: true });

      axios
        .get(this.state.url)
        .then((response) => {
          this.setState({ climaData: response.data, loading: false });
        })
        .catch((error) => {
          console.error(error);
          console.log("Error al cargar los datos climáticos:", error.message);
          this.setState({ loading: false });
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Text h3 style={styles.title}>
            Clima en {this.state.climaData.name}
          </Text>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : this.state.climaData.main ? (
            <View style={styles.weatherInfo}>
              <Icon name="thermometer" type="font-awesome" color="#000" />
              <Text style={styles.weatherText}>
                Temperatura: {this.state.climaData.main.temp}°C
              </Text>
              <Icon name="sun-o" type="font-awesome" color="#fdd835" />
              <Text style={styles.weatherText}>
                Condición: {this.state.climaData.weather[0].description}
              </Text>
            </View>
          ) : (
            <Text style={styles.errorText}>
              Error al cargar los datos climáticos.
            </Text>
          )}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Fondo más claro
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    borderRadius: 15,
  },
  title: {
    textAlign: "center",
  },
  weatherInfo: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    padding: 50,
    gap: 25,
    marginTop: 20,
    justifyContent: "center",
  },
  weatherText: {
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    color: "red",
  },
});

export default Clima;
