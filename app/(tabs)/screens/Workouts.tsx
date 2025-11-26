// app/(tabs)/screens/Workouts.tsx
import { History, Play, Plus } from "lucide-react-native";
import React from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const PREMADE_WORKOUTS = [
  { id: "back", name: "Back Workout", exercises: 6, time: "45 min" },
  { id: "arms", name: "Arms Workout", exercises: 5, time: "35 min" },
  { id: "legs", name: "Legs Workout", exercises: 7, time: "50 min" },
  { id: "abs", name: "Abs Workout", exercises: 4, time: "25 min" },
  { id: "chest", name: "Chest Workout", exercises: 5, time: "40 min" },
];

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Workouts</Text>
          <Pressable style={styles.historyButton}>
            <History size={16} color="#000" />
            <Text style={styles.historyText}>History</Text>
          </Pressable>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsSection}>
          <Pressable style={styles.createButton}>
            <Plus size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text style={styles.createButtonText}>Create Workout</Text>
          </Pressable>

          <Pressable style={styles.aiButton}>
            <Play size={18} color="#000" style={{ marginRight: 8 }} />
            <Text style={styles.aiButtonText}>Generate AI Workout</Text>
          </Pressable>
        </View>

        {/* Pre-made workouts */}
        <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>Pre-Made Workouts</Text>

          {PREMADE_WORKOUTS.map((w) => (
            <Pressable key={w.id} style={styles.workoutCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.workoutName}>{w.name}</Text>
                <Text style={styles.workoutMeta}>
                  {w.exercises} exercises · {w.time}
                </Text>
              </View>
              <View style={styles.playCircle}>
                <Play size={16} color="#FFFFFF" />
              </View>
            </Pressable>
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContent: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 140,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000",
  },
  historyButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
  },
  historyText: {
    marginLeft: 6,
    fontSize: 13,
    color: "#000",
  },
  buttonsSection: {
    marginBottom: 24,
    gap: 10,
  },
  createButton: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  aiButton: {
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  aiButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
  listSection: {
    marginTop: 24,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    marginBottom: 8,
  },
  workoutCard: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  workoutMeta: {
    fontSize: 12,
    color: "#4B5563",
  },
  playCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
