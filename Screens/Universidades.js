import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Card, Input, Button, Text, ListItem } from "@rneui/themed";
import axios from "axios";

class Universidades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paisData: [],
      name: "",
      url: "http://universities.hipolabs.com/search?country=",
      loading: false,
    };
  }

  componentDidMount = () => {
    if (this.state.name) {
      this.setState({ loading: true });

      axios
        .get(this.state.url + this.state.name)
        .then((response) => {
          this.setState({ paisData: response.data, loading: false });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ loading: false });
        });
    }
  };

  renderUniversityItem = (item) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>Dominio: {item.domains}</ListItem.Subtitle>
          <ListItem.Subtitle>Página: {item.web_pages}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card.Divider />
        <Input
          style={styles.input}
          placeholder="Ingrese el nombre de un país en inglés"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <Button
          title="Revelar"
          type="clear"
          size="lg"
          onPress={this.componentDidMount}
        />
        <Card.Title h3>Universidades</Card.Title>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : this.state.paisData.length > 0 ? (
          <FlatList
            data={this.state.paisData}
            renderItem={({ item }) => this.renderUniversityItem(item)}
          />
        ) : (
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "red",
              fontSize: 18,
            }}
          >"No se encontraron universidades."</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    fontSize: 15,
  },
  container: {
    padding: 10,
    backgroundColor: "#F5FCFF",
    width: "100%",
  },
});

export default Universidades;
