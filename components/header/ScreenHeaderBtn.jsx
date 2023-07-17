import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenHeaderBtn.style";

const ScreenHeaderBtn = ({ iconUrl, onPress, dimension }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnCont}>
      <Image
        source={iconUrl}
        style={styles.btnImg(dimension)}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
