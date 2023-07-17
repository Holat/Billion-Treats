import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack, useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import {
  Button,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import styles from "./welcome.style";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.imgCont}>
        <Image
          source={require("../../../assets/images/burger-wallpapers-82646-1270457-6398427.png")}
          resizeMode="cover"
          style={styles.background}
        />
      </View>
      <View style={styles.safeAreaCont}>
        <LinearGradient
          style={styles.textCont}
          colors={["rgba(13,13,13, 0.0)", "black"]}
        ></LinearGradient>
        <View style={styles.motCont}>
          <Image
            source={require("../../../assets/images/Screenshot_20230415-201232_Chrome-removebg.png")}
            resizeMode="cover"
            style={styles.logo}
          />
          <Text style={styles.logoT1}>Food</Text>
          <Text style={styles.logoT1}>For Icons...</Text>
          <Text style={styles.logoT2}>Fast Delivery</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("(drawer)")}
        >
          <Image
            source={require("../../../assets/icons/chevron-right.png")}
            resizeMode="cover"
            style={{ width: 36, height: 36 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
