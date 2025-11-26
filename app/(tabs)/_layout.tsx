// app/(tabs)/_layout.tsx
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs, router } from "expo-router";
import {
  Bot,
  Dumbbell,
  Home as HomeIcon,
  LineChart,
  Settings as SettingsIcon,
} from "lucide-react-native";

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabWrapper}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const rawLabel =
            options.tabBarLabel ?? options.title ?? route.name.replace("screens/", "");

          const labelText =
            typeof rawLabel === "string" ? rawLabel : options.title ?? route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            if (labelText === "AI") {
              router.push("/aichat");
              return;
            }
            navigation.navigate(route.name);
          };

          const renderIcon = () => {
            const color = isFocused ? "#FFF" : "#6B7280";

            switch (labelText) {
              case "Home":
                return <HomeIcon size={18} color={color} strokeWidth={2} />;
              case "Workouts":
                return <Dumbbell size={18} color={color} strokeWidth={2} />;
              case "AI":
                return <Bot size={18} color={color} strokeWidth={2} />;
              case "Progress":
                return <LineChart size={18} color={color} strokeWidth={2} />;
              case "Settings":
                return <SettingsIcon size={18} color={color} strokeWidth={2} />;
              default:
                return <HomeIcon size={18} color={color} strokeWidth={2} />;
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={({ pressed }) => [
                styles.tabItem,
                pressed && styles.tabItemPressed,
              ]}
            >
              <View
                style={[
                  styles.iconCircle,
                  isFocused && styles.iconCircleActive,
                ]}
              >
                {renderIcon()}
              </View>

              <Text
                style={[
                  styles.tabLabel,
                  isFocused ? styles.activeLabel : styles.inactiveLabel,
                ]}
              >
                {labelText}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <FloatingTabBar {...props} />}>
      <Tabs.Screen name="screens/Home" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="screens/Workouts" options={{ title: "Workouts", headerShown: false }} />
      <Tabs.Screen name="screens/AI" options={{ title: "AI", headerShown: false }} />
      <Tabs.Screen name="screens/Progress" options={{ title: "Progress", headerShown: false }} />
      <Tabs.Screen name="screens/Settings" options={{ title: "Settings", headerShown: false }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 32, // RAISED MORE
    paddingHorizontal: 18,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 60, // SMALLER PILL
    borderWidth: 2,
    borderColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  tabItemPressed: {
    opacity: 0.7,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircleActive: {
    backgroundColor: "#000",
  },
  tabLabel: {
    fontSize: 10,
  },
  activeLabel: {
    color: "#000",
    fontWeight: "600",
  },
  inactiveLabel: {
    color: "#6B7280",
  },
});
