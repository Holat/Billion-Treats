import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import { ScreenHeaderBtn } from "../../../components";
import { icons, images, COLORS, FONT } from "../../../constants";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.lightOrange,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={30} color={color} />
          ),
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          // headerLeft: () => (
          //   <ScreenHeaderBtn
          //     dimension={30}
          //     iconUrl={icons.menu}
          //     //   onPress={() => router.back()}
          //   />
          // ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={35} />
          ),
          headerTitle: "Billion Treat",
          headerTitleAlign: "center",
          headerTintColor: COLORS.lightOrange,
          headerTitleStyle: {
            fontFamily: FONT.sil,
            fontSize: 25,
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={30} color={color} />
          ),
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn dimension={30} iconUrl={icons.menu} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={35} />
          ),
          headerTitle: "Billion Treat",
          headerTitleAlign: "center",
          headerTintColor: COLORS.lightOrange,
          headerTitleStyle: {
            fontFamily: FONT.sil,
            fontSize: 25,
          },
        }}
      />
    </Tabs>
  );
}
