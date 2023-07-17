import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";

import { Popular, Resturants, SearchHead } from "../../../components";

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          paddingHorizontal: 30,
        }}
      >
        <SearchHead />
        <Popular />
        <Resturants />
      </View>
    </SafeAreaView>
  );
};

export default Home;
