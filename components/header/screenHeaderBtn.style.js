import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnCont: {
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 50,
  }),
});

export default styles;
