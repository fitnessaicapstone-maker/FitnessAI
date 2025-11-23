import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Initial Setup Flow */}
        <Stack.Screen name="(tabs)/initial/splash" />
        <Stack.Screen name="(tabs)/initial/login" />
        <Stack.Screen name="(tabs)/initial/signup" />
        <Stack.Screen name="(tabs)/initial/genderselect" />
        <Stack.Screen name="(tabs)/initial/bodymetrics" />
        <Stack.Screen name="(tabs)/initial/tour" />

        {/* Main App (Bottom Tabs) */}
        <Stack.Screen name="(tabs)" />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}

