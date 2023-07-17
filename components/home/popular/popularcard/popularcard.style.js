import { StyleSheet } from "react-native";
// import { Platform } from "react-native";

import { COLORS, FONT } from "../../../../constants";

// const box_Shadow = (
//   xOffset,
//   yOffset,
//   shadowColorIos,
//   shadowOpacity,
//   shadowRadius,
//   elevation,
//   shadowColorAndroid
// ) => {
//   if (Platform.OS === "ios") {
//     styles.boxShadow = {
//       shadowColor: shadowColorIos,
//       shadowOpacity,
//       shadowRadius,
//       shadowOffset: { width: xOffset, height: yOffset },
//     };
//   } else if (Platform.OS === "android") {
//     styles.boxShadow = { elevation, shadowColor: shadowColorAndroid };
//   }
// };

// box_Shadow(-2, 4, "#171717", 0.5, 3, 4, "#171717");

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "black",
    width: 137,
    height: 196,
    borderRadius: 12,
    marginBottom: 10,
  },
  add: {
    width: 20,
    height: 20,
    position: "absolute",
    borderRadius: 50,
    backgroundColor: COLORS.lightOrange,
    top: "3%",
    right: "5%",
    zIndex: 10,
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "60%",
    borderRadius: 50,
    position: "absolute",
    top: "10%",
  },
  shadow: {
    height: 10,
    width: "70%",
    position: "absolute",
    top: "100%",
    alignSelf: "center",
    elevation: 20,
    borderRadius: 12,
  },
  dCont: {
    padding: 13,
    position: "absolute",
    bottom: "10%",
  },
  name: {
    color: "white",
    fontFamily: FONT.msemibold,
    fontSize: 16,
    letterSpacing: 0.07,
  },
  // gradient: {
  //   height: 50,
  //   width: "100%",
  //   position: "absolute",
  //   bottom: "50%",
  // },
  dollar: {
    fontFamily: FONT.mbold,
    fontSize: 14,
    color: COLORS.lightOrange,
  },
  price: {
    fontFamily: FONT.mbold,
    fontSize: 14,
    color: "white",
  },
  pCont: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 5,
    marginTop: 8,
  },
});

export default styles;
