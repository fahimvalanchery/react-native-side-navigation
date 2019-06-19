import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./Screens/DrawerNavigator";
type Props = {};
export default class App extends Component<Props> {
  render() {
    return <DrawerNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
