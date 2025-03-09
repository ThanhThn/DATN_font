import { Href, SplashScreen, Stack, usePathname, useRouter } from "expo-router";
import "../global.css";
import {
  AppState,
  AppStateStatus,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { env, getDeviceID } from "@/helper/helper";
import { LocalStorage } from "@/services/LocalStorageService";
import { GeneralProvider } from "@/providers/GeneralProvider";
import { useGeneral } from "@/hooks/useGeneral";
import UserService from "@/services/User/UserService";
import FCMService from "@/services/FCMService";
import * as Notifications from "expo-notifications";
import registerNNPushToken, {
  getPushDataObject,
  registerIndieID,
} from "native-notify";
import { UIProvider } from "@/providers/UIProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [user, setUser] = useState<Record<any, any> | null>(null);
  const [loading, setLoading] = useState(true);
  const localStorage = new LocalStorage();
  const route = useRouter();
  const [page, setPage] = useState<Href | null>(null);
  const pathName = usePathname();
  const [hasHandledPush, setHasHandledPush] = useState(false);

  // Load fonts
  const [fontsLoaded] = useFonts({
    BeVietnamProBold: require("../assets/fonts/BeVietnamPro-Bold.ttf"),
    BeVietnamProExtraBold: require("../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    BeVietnamProMedium: require("../assets/fonts/BeVietnamPro-Medium.ttf"),
    BeVietnamProRegular: require("../assets/fonts/BeVietnamPro-Regular.ttf"),
    BeVietnamProSemiBold: require("../assets/fonts/BeVietnamPro-SemiBold.ttf"),
  });

  const registerNotify = useCallback(async () => {
    try {
      const hasRequested = await AsyncStorage.getItem(
        "hasRequestedPermissionNotification"
      );

      if (!hasRequested) {
        const { status } = await Notifications.getPermissionsAsync();

        if (status !== "granted") {
          const { status: newStatus } =
            await Notifications.requestPermissionsAsync();
          const isGranted = newStatus === "granted";

          await AsyncStorage.setItem(
            "hasRequestedPermissionNotification",
            isGranted ? "true" : "false"
          );

          if (!isGranted) return;
        } else {
          await AsyncStorage.setItem(
            "hasRequestedPermissionNotification",
            "true"
          );
        }
      }

      const token = await getDeviceID();
      registerIndieID(token, 27513, "QLJhpcwxfBIPqKDS9rC8sd");
    } catch (error) {}
  }, []);

  const handlePushData = useCallback(
    async (response: Notifications.NotificationResponse) => {
      if (response.notification && response.notification.request.content.data) {
        console.log(
          "📌 Push data nhận được:",
          response.notification.request.content.data
        );
      }
    },
    []
  );

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      // const token = await new FCMService().getToken();
      // console.log(token);
      try {
        const token = await localStorage.getItem(env("KEY_TOKEN"));
        if (!token) {
          setPage("/login");
          setLoading(false);
          return;
        }

        const data = await new UserService().info();

        if (!data) {
          await localStorage.removeItem(env("KEY_TOKEN"));
          setUser(null);
          setPage("/login");
          return;
        }

        setUser(data);

        setPage(data?.is_completed ? "/" : "/user/update");
      } catch (error) {
        setPage("/login");
      } finally {
        setLoading(false);
      }
    };

    SplashScreen.preventAutoHideAsync();
    fetchUserData();
    registerNotify();
  }, []);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active") {
        // handlePushData();
        setHasHandledPush(false);
      }
    };

    const appStateListener = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener(handlePushData);

    return () => {
      appStateListener.remove();
      responseListener.remove();
    };
  }, [hasHandledPush]);

  useEffect(() => {
    if (!loading && fontsLoaded && page) {
      SplashScreen.hideAsync();
      route.replace(page);
    }
  }, [loading, fontsLoaded, page]);

  // Hiển thị màn hình chờ khi chưa load xong
  if (!fontsLoaded || loading) {
    return (
      <View className="flex-1 bg-lime-300 items-center justify-center">
        {/* <Text className="font-BeVietnamMedium text-16 text-mineShaft-900">Get ready...</Text> */}
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white-50">
      <GeneralProvider user={user}>
        <UIProvider>
          <GestureHandlerRootView>
            <Container />
          </GestureHandlerRootView>
        </UIProvider>
      </GeneralProvider>
    </SafeAreaView>
  );
}

const Container = () => {
  const containerRef = useRef(null);
  const { clickRef } = useGeneral();
  return (
    <TouchableWithoutFeedback
      className="flex-1 bg-white-50"
      onPress={() => {
        clickRef(containerRef, () => {});
      }}
    >
      <View className="flex-1 bg-white-50 relative" ref={containerRef}>
        <StatusBar barStyle="dark-content" translucent />
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            freezeOnBlur: false,
          }}
        />
        {/* <View className="w-screen h-screen absolute bg-black"></View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};
