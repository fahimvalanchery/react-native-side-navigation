import { Dimensions } from "react-native";

import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const WIDTH = Dimensions.get("screen").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
