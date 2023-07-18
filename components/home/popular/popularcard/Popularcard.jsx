import { Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Link } from "expo-router";

import Rating from "../../../ratingStar";
import styles from "./popularcard.style";
import { COLORS } from "../../../../constants";

const Popularcard = ({ item }) => {
  return (
    <Link href={`/order/${item.id}`} asChild>
      <Pressable style={styles.cont}>
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
          <Rating
            rate={item.priceRating}
            size={12}
            icon1={"star"}
            icon2={"star"}
            style={styles.rate}
            color={COLORS.gray}
          />
          <View style={styles.pCont}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default Popularcard;
