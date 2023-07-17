import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

import { icons, images, COLORS, FONT } from "../../constants";
import { ScreenHeaderBtn } from "../../components";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
  initialRouteName: "(home)",
};

const DrawerLayout = () => {
  const navigation = useNavigation();
  return (
    <Drawer>
      <Drawer.Screen
        name="(home)"
        options={{
          title: "Home",
          headerLeft: () => (
            <ScreenHeaderBtn
              dimension={30}
              iconUrl={icons.menu}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={35} />
          ),
          headerTitle: "Billion Treat",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: FONT.sil,
            fontSize: 25,
            color: COLORS.lightOrange,
          },
        }}
      />
      <Drawer.Screen name="Profile" />
      <Drawer.Screen name="Settings" />
    </Drawer>
  );
};

export default DrawerLayout;
