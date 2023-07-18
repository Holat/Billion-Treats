import { Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import styles from "./resturant.style";
import menu from "../../../assets/menu.json";
import Rating from "../../../components/ratingStar";
import { COLORS } from "../../../constants";

const Resturants = () => {
  const resturants = menu.restaurants;
  return (
    <View style={styles.cont}>
      <Text style={styles.header}>Restaurants</Text>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: resturants[0].imageURL }}
            style={styles.img}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.name}>{resturants[0].name}</Text>
            <Rating
              rate={resturants[0].rating}
              size={12}
              icon1={"star"}
              icon2={"star"}
              color={COLORS.grey}
              style={styles.rate}
            />
            <Text style={styles.dist}>{resturants[0].distance}km</Text>
          </View>
        </View>
        <AntDesign name="arrowright" size={38} color={COLORS.lightOrange} />
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: resturants[1].imageURL }}
            style={styles.img}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.name}>{resturants[1].name}</Text>
            <Rating
              rate={resturants[1].rating}
              size={12}
              icon1={"star"}
              icon2={"star"}
              color={COLORS.grey}
              style={styles.rate}
            />
            <Text style={styles.dist}>{resturants[1].distance}km</Text>
          </View>
        </View>
        <AntDesign name="arrowright" size={38} color={COLORS.lightOrange} />
      </View>
    </View>
  );
};

export default Resturants;
