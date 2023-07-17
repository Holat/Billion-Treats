import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  cont: {
    marginTop: 49,
  },
  header: {
    fontFamily: FONT.mbold,
    fontSize: 20,
  },
  card: {
    height: 69,
    marginTop: 14,
    backgroundColor: "#EDEDED",
    borderRadius: SIZES.cardRadius,
  },
});

export default styles;
