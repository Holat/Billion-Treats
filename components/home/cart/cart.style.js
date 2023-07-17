import { StyleSheet } from "react-native";
import { FONT, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  cont: {
    backgroundColor: COLORS.white,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: COLORS.lightGray,
  },

  EmptyText: {
    color: COLORS.darkGray,
    fontSize: 16,
    fontFamily: FONT.omedium,
  },
});

export default styles;
