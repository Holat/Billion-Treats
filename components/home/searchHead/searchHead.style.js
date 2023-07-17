import { StyleSheet } from "react-native";

import { FONT, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  headCont: {},
  header1: {
    fontFamily: FONT.mregular,
    fontSize: 32,
  },
  header2: {
    fontFamily: FONT.mbold,
    fontSize: 32,
  },
  inputCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#EDEDED",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 28,
    overflow: "hidden",
  },
  searchImg: {
    width: 18,
    height: 18,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 5,
  },
  input: {
    color: COLORS.lightOrange,
    fontSize: 16,
    fontFamily: FONT.omedium,
    flexWrap: "nowrap",
    flex: 2,
  },
});

export default styles;
