import { View, Text } from "react-native";

import styles from "./cart.style";

const Cart = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.EmptyText}>Cart Empty</Text>
    </View>
  );
};

export default Cart;
