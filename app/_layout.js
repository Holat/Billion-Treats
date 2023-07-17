import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import { DrawerLayout } from "./drawer";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    MBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MeRegular: require("../assets/fonts/Merienda-Regular.ttf"),
    OBold: require("../assets/fonts/OpenSans-Bold.ttf"),
    OMedium: require("../assets/fonts/OpenSans-Medium.ttf"),
    ORegular: require("../assets/fonts/OpenSans-Regular.ttf"),
    sIL: require("../assets/fonts/ShadowsIntoLight-Regular.ttf"),
  });

  SplashScreen.preventAutoHideAsync();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack onLayout={onLayoutRootView}>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
