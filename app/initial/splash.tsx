// app/initial/SplashScreen.tsx
import { router } from "expo-router";
import { Dumbbell } from "lucide-react-native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("initial/login");
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Dumbbell size={72} color="black" />
      </View>
      <Text style={styles.title}>FitTrack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 999,
    padding: 32,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    color: "black",
  },
});
