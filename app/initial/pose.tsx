import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PoseDetector from "../../components/PoseDetector";

export default function PoseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pose Detection</Text>
      <PoseDetector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 16 },
});
