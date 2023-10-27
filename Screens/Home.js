import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";


const Home = () => {
  return (
    <View style={styles.container}>
      {/* caja de herramientas */}
      <Icon name="toolbox" size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
