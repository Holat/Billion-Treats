import { StyleSheet } from "react-native";

import { FONT, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "black",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  imgCont: {
    flex: 3,
  },
  safeAreaCont: {
    flex: 1,
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  textCont: {
    height: 300,
    position: "absolute",
    width: "100%",
    bottom: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    margin: 10,
  },
  motCont: {
    position: "absolute",
    bottom: "100%",
    width: "100%",
    alignItems: "flex-start",
    display: "flex",
  },
  logoT1: {
    fontFamily: FONT.mbold,
    fontSize: 60,
    color: "white",
    fontWeight: 600,
    paddingLeft: 30,
  },
  logoT2: {
    color: COLORS.lightOrange,
    fontFamily: FONT.mregular,
    fontSize: 20,
    fontWeight: 300,
    marginTop: 20,
    paddingLeft: 30,
  },
  btn: {
    backgroundColor: COLORS.lightOrange,
    padding: 18,
    borderRadius: 50,
    position: "absolute",
    bottom: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
});

export default styles;
