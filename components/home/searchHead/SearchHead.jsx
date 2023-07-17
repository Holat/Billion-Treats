import { Image, Text, TextInput, View } from "react-native";
import React from "react";

import { icons, COLORS } from "../../../constants";
import styles from "./searchHead.style";

const SearchHead = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headCont}>
        <Text style={styles.header1}>Find and Order</Text>
        <Text style={styles.header2}>Food for you</Text>
      </View>
      <View style={styles.inputCont}>
        <Image
          source={icons.search}
          style={styles.searchImg}
          resizeMode="contain"
        />
        <TextInput
          placeholder="search"
          style={styles.input}
          selectionColor={COLORS.lightOrange}
        />
      </View>
    </View>
  );
};

export default SearchHead;
