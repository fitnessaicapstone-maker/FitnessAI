// app/(tabs)/screens/Settings.tsx
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [useImperial, setUseImperial] = useState(false);

  const [autoIncrease, setAutoIncrease] = useState(false);
  const [aiCoachMode, setAiCoachMode] = useState(true);
  const [autoAssumeSet, setAutoAssumeSet] = useState(false);

  // Fake selected values 
  const [weightIncrease] = useState("5 lbs");
  const [achievementTimeframe] = useState("1 Week Straight");
  const [aiVoice] = useState("Voice 1 - Professional");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Page title */}
      <Text style={styles.pageTitle}>Settings</Text>

      {/* Display Settings */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Display Settings</Text>

        {/* Dark Mode */}
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.label}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#e5e5e5", true: "#111" }}
            thumbColor="#fff"
          />
        </View>

        {/* Units */}
        <View style={[styles.rowBetween, { marginTop: 24 }]}>
          <Text style={styles.label}>Units</Text>

          <View style={styles.unitToggle}>
            <Pressable
              style={[
                styles.unitOption,
                !useImperial && styles.unitOptionActive,
              ]}
              onPress={() => setUseImperial(false)}
            >
              <Text
                style={[
                  styles.unitText,
                  !useImperial && styles.unitTextActive,
                ]}
              >
                kg / km
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.unitOption,
                useImperial && styles.unitOptionActive,
              ]}
              onPress={() => setUseImperial(true)}
            >
              <Text
                style={[
                  styles.unitText,
                  useImperial && styles.unitTextActive,
                ]}
              >
                lbs / miles
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Progress Automation */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Progress Automation</Text>

        {/* Auto-increase weight */}
        <View style={styles.rowBetween}>
          <View style={{ flex: 1, paddingRight: 20 }}>
            <Text style={styles.label}>Auto-increase weight</Text>
            <Text style={styles.subText}>
              Increases weight after achieving target reps/sets
            </Text>
          </View>
          <Switch
            value={autoIncrease}
            onValueChange={setAutoIncrease}
            trackColor={{ false: "#e5e5e5", true: "#111" }}
            thumbColor="#fff"
          />
        </View>

        {/* Weight increase amount */}
        <View style={{ marginTop: 24 }}>
          <Text style={styles.label}>Weight Increase Amount (lbs)</Text>
          <Pressable style={styles.selectBox}>
            <Text style={styles.selectText}>{weightIncrease}</Text>
          </Pressable>
        </View>

        {/* Achievement timeframe */}
        <View style={{ marginTop: 18 }}>
          <Text style={styles.label}>Achievement Timeframe</Text>
          <Pressable style={styles.selectBox}>
            <Text style={styles.selectText}>{achievementTimeframe}</Text>
          </Pressable>
          <Text style={[styles.subText, { marginTop: 8 }]}>
            Weight increases after you complete target for this duration. Counts
            toward achievements.
          </Text>
        </View>
      </View>

      {/* AI Settings */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>AI Settings</Text>

        {/* AI Coach Mode */}
        <View style={styles.rowBetween}>
          <View style={{ flex: 1, paddingRight: 20 }}>
            <Text style={styles.label}>AI Coach Mode</Text>
            <Text style={styles.subText}>
              Real-time guidance during workouts
            </Text>
          </View>
          <Switch
            value={aiCoachMode}
            onValueChange={setAiCoachMode}
            trackColor={{ false: "#e5e5e5", true: "#111" }}
            thumbColor="#fff"
          />
        </View>

        {/* Auto Assume Set Visually */}
        <View style={[styles.rowBetween, { marginTop: 20 }]}>
          <View style={{ flex: 1, paddingRight: 20 }}>
            <Text style={styles.label}>Auto Assume Set Visually</Text>
            <Text style={styles.subText}>AI tracks reps automatically</Text>
          </View>
          <Switch
            value={autoAssumeSet}
            onValueChange={setAutoAssumeSet}
            trackColor={{ false: "#e5e5e5", true: "#111" }}
            thumbColor="#fff"
          />
        </View>

        {/* AI Voice Selection */}
        <View style={{ marginTop: 24 }}>
          <Text style={styles.label}>AI Voice Selection</Text>
          <Pressable style={styles.selectBox}>
            <Text style={styles.selectText}>{aiVoice}</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  pageTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "black",
    marginTop: 24, 
    marginBottom: 18,
  },
  card: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 18,
    color: "black",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "black",
    marginBottom: 4,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
  unitToggle: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 999,
    overflow: "hidden",
  },
  unitOption: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "transparent",
  },
  unitOptionActive: {
    backgroundColor: "black",
  },
  unitText: {
    fontSize: 12,
    color: "black",
  },
  unitTextActive: {
    color: "white",
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 6,
  },
  selectText: {
    fontSize: 14,
    color: "black",
  },
});
