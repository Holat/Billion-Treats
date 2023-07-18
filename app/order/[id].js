import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useSearchParams, useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import menuData from "../../assets/menu.json";
import { COLORS, FONT } from "../../constants";
import Rating from "../../components/ratingStar";

const Order = () => {
  const { id } = useSearchParams();
  const item = menuData.foodItems.find((t) => t.id.toString() === id);
  const navigation = useNavigation();

  const [count, setCount] = useState(1);

  const Decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  if (!item) {
    return <Text>Order not found</Text>;
  }

  return (
    <View style={styles.cont}>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </Pressable>
      <Image
        source={{ uri: item.imageURL }}
        resizeMode="cover"
        style={styles.img}
      />
      <View style={styles.sheet}>
        <Text style={styles.name}>{item.name}</Text>
        <Rating rate={item.priceRating} />
        <Text style={styles.price}>
          <Text style={styles.priceC}>$</Text>
          {item.price}
        </Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <View style={styles.counterCont}>
          <Pressable
            style={styles.ath}
            onPress={() => count > 1 && setCount(count - 1)}
          >
            <Text style={styles.countTxt}>-</Text>
          </Pressable>
          <Text style={styles.countTxt}>{count}</Text>
          <Pressable style={styles.ath} onPress={() => setCount(count + 1)}>
            <Text style={styles.countTxt}>+</Text>
          </Pressable>
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btntxt}>Place your order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.white,
    width: "100%",
    height: "50%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 40,
  },
  name: {
    color: COLORS.black,
    fontSize: 35,
    fontFamily: FONT.mbold,
    marginBottom: 10,
  },

  price: {
    fontSize: 24,
    fontFamily: FONT.msemibold,
    marginBottom: 15,
  },

  priceC: {
    fontSize: 16,
    fontFamily: FONT.msemibold,
    color: COLORS.lightOrange,
  },

  desc: {
    color: COLORS.grey,
    fontSize: 14,
    fontFamily: FONT.mregular,
    marginBottom: 30,
  },

  btn: {
    backgroundColor: COLORS.lightOrange,
    borderRadius: 18,
    padding: 18,
    position: "absolute",
    margin: 40,
    bottom: 0,
    width: "100%",
  },

  btntxt: {
    textAlign: "center",
    color: COLORS.white,
    fontFamily: FONT.mbold,
    fontSize: 17,
  },

  counterCont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },

  countTxt: {
    fontFamily: FONT.msemibold,
    fontSize: 16,
  },

  ath: {
    backgroundColor: COLORS.lightGray,
    width: 37,
    height: 37,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  rate: {
    flexDirection: "row",
    marginBottom: 15,
  },

  back: {
    position: "absolute",
    top: 0,
    marginTop: 40,
    marginLeft: 10,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
});
