import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../constants";
{
  /* <AntDesign name="star" size={24} color={COLORS.lightOrange} /> */
}
{
  /* <AntDesign name="staro" size={24} color={COLORS.lightOrange} /> */
}

const Rating = ({ rate }) => {
  const element = [];
  const renderItems = () => {
    for (i = 0; i < rate; i++) {
      element.push(
        <AntDesign name="star" size={24} color={COLORS.lightOrange} key={i} />
      );
    }
    for (i = 0; i < 5 - rate; i++) {
      element.push(
        <AntDesign
          name="staro"
          size={24}
          color={COLORS.lightOrange}
          key={rate + 1 + i}
        />
      );
    }
    return element;
  };

  return <View style={styles.rate}>{renderItems()}</View>;
};

const styles = StyleSheet.create({
  rate: {
    flexDirection: "row",
    marginBottom: 15,
  },
});

export default Rating;
