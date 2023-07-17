import { Text, View } from "react-native";
import React from "react";

import styles from "./resturant.style";

const Resturants = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.header}>Restaurants</Text>
      <View style={styles.card}></View>
    </View>
  );
};

// 49
export default Resturants;
