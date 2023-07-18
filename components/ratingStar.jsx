import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../constants";

const Rating = ({ rate, size, icon1, icon2, style, color }) => {
  const element = [];
  const renderItems = () => {
    for (i = 0; i < rate; i++) {
      element.push(
        <AntDesign
          name={icon1}
          size={size}
          color={COLORS.lightOrange}
          key={i}
        />
      );
    }
    for (i = 0; i < 5 - rate; i++) {
      element.push(
        <AntDesign name={icon2} size={size} color={color} key={rate + 1 + i} />
      );
    }
    return element;
  };

  return <View style={style}>{renderItems()}</View>;
};

const styles = StyleSheet.create({
  rate: {
    flexDirection: "row",
    marginBottom: 15,
  },
});

export default Rating;
