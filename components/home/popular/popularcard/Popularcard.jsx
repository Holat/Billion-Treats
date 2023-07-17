import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import styles from "./popularcard.style";

const Popularcard = ({ item }) => {
  return (
    <View style={styles.cont}>
      <View style={styles.shadow}></View>
      <View style={styles.add}>
        <Text style={{ color: "white" }}>+</Text>
      </View>
      <Image
        source={{ uri: item.imageURL }}
        resizeMode="cover"
        style={styles.img}
      />
      {/* <LinearGradient
        style={styles.gradient}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
      ></LinearGradient> */}
      <View style={styles.dCont}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.pCont}>
          <Text style={styles.dollar}>$</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Popularcard;
