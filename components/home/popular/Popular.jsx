import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

import styles from "./popular.style";

// import useFetch from "../../../hooks/useFetch";
import Popularcard from "./popularcard/Popularcard";
import menuData from "../../../assets/menu.json";

const Popular = () => {
  // const { data, error, isLoading } = useFetch();
  const renderItem = ({ item }) => <Popularcard item={item} />;
  return (
    <View style={styles.cont}>
      <Text style={styles.heading}>Popular</Text>
      <FlatList
        data={menuData.foodItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ columnGap: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default Popular;

// /* {isLoading ? (
//         <View style={styles.ai}>
//           <ActivityIndicator size="large" color={COLORS.lightOrange} />
//         </View>
//       ) : error ? (
//         <Text style={styles.sww}>Something went wrong</Text>
//       ) : ( */
// {/* )} */}
