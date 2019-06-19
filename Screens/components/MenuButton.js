import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-ionicons";

export default class MenuButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Icon
            name="menu"
            color="#ffffff"
            size={32}
            style={styles.menuIcon}
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Text style={styles.headText}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    left: 25,
    top: 10
  },
  header: {
    backgroundColor: "#455a64",
    height: 50
  },
  headText: {
    left: 75,
    bottom: 22,
    fontSize: 22,
    fontWeight: "500",
    color: "#ffffff"
  }
});
