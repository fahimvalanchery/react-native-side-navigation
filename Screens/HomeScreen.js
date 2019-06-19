import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MenuButton from "./components/MenuButton";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuButton navigation={this.props.navigation} name="Home" />
        <View style={styles.container}>
          <Text style={styles.welcome}>Home</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    alignItems: "center"
  }
});
