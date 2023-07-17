import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerActions } from "@react-navigation/drawer";
import { withNavigation } from "react-navigation";

import Home from "./(home)";
import Profile from "./Profile";
import Settings from "./Settings";
import { icons } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import { useNavigation, withLayoutContext } from "expo-router";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

const DrawerLayout = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator initialRouteName="">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <ScreenHeaderBtn
              dimension={30}
              iconUrl={icons.menu}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerLayout;
