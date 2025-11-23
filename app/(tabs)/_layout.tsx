import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="screens/Home" options={{ title: "Home" }} />
      <Tabs.Screen name="screens/Progress" options={{ title: "Progress" }} />
      <Tabs.Screen name="screens/AI" options={{ title: "AI" }} />
      <Tabs.Screen name="screens/Profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="screens/Settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
