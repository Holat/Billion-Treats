import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  cont: {
    marginTop: 41,
  },
  heading: {
    fontFamily: FONT.mbold,
    fontSize: 20,
  },
  sww: {
    fontFamily: FONT.mmedium,
    height: SIZES.popularcardH,
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.cardRadius,
    marginTop: SIZES.marginTop,
  },
  ai: {
    height: SIZES.popularcardH,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.marginTop,
  },
});

export default styles;
