import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  cont: {
    marginTop: 30,
  },
  header: {
    fontFamily: FONT.mbold,
    fontSize: 20,
  },
  card: {
    marginTop: 14,
    backgroundColor: "#EDEDED",
    borderRadius: SIZES.cardRadius,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 52,
    height: 52,
    borderRadius: 12,
    marginRight: 20,
  },
  rate: {
    flexDirection: "row",
    marginBottom: 4,
  },

  name: {
    fontFamily: FONT.mregular,
    fontSize: 14,
    marginBottom: 5,
  },

  dist: {
    fontFamily: FONT.mregular,
    fontSize: 12,
    color: COLORS.grey,
  },
});

export default styles;
