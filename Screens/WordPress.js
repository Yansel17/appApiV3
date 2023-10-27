import React, { Component } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { Card, Text } from "react-native-paper";
import axios from "axios";
import HTML from "react-native-render-html";

class WordPress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      url: "https://blog.ted.com/wp-json/wp/v2/posts?per_page=3",
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get(this.state.url)
      .then((response) => {
        this.setState({ data: response.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false, error: "Error al cargar los datos" });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    return (
      <ScrollView style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <Card key={index}>
              <Card.Title
                title={item.title.rendered}
                subtitle={item.date}
                numberOfLines={2}
              />
              <View style={styles.text} numberOfLines={9}>
                <HTML source={{ html: item.excerpt.rendered }} />
              </View>
            </Card>
          ))
        ) : (
          <Text>{error ? error : "No hay datos disponibles"}</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    width: "100%",
  },

  text: {
    fontSize: 16,
    textAlign: "justify",
    margin: 10,
    padding: 5,
    height: 250,
    backgroundColor: "#fff",
    // Otros estilos de texto
  },
});

export default WordPress;
