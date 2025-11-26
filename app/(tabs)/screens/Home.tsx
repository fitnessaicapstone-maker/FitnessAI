// app/(tabs)/screens/Home.tsx
import { useRouter } from "expo-router";
import { Bell, Clock, Flame, Target } from "lucide-react-native";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header: user + notifications */}
        <View style={styles.headerRow}>
          <Pressable
            style={styles.userButton}
            onPress={() => router.push("/subscreens/profile")}
          >
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>U</Text>
            </View>
            <View>
              <Text style={styles.userName}>User</Text>
              <Text style={styles.userSubtitle}>Hello, there</Text>
            </View>
          </Pressable>

          <Pressable style={styles.bellWrapper}>
            <Bell size={22} color="#000" />
            <View style={styles.bellDot} />
          </Pressable>
        </View>

        {/* Motivation banner */}
        <View style={styles.motivationBanner}>
          <Text style={styles.motivationText}>
            Push yourself because no one else is going to do it for you.
          </Text>
        </View>

        {/* Today’s progress card */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.cardHeaderLeft}>
              <Flame size={18} color="#000" />
              <Text style={styles.cardTitle}>Today&apos;s Progress</Text>
            </View>
            <Text style={styles.cardSubText}>Peak Energy Time</Text>
          </View>

          <View style={styles.progressGridTop}>
            <View style={styles.progressBox}>
              <Text style={styles.progressNumber}>2</Text>
              <Text style={styles.progressLabel}>Workouts Today</Text>
            </View>
            <View style={styles.progressBox}>
              <Text style={styles.progressNumber}>450</Text>
              <Text style={styles.progressLabel}>Calories Burned</Text>
            </View>
          </View>

          <View style={styles.progressGridBottom}>
            <View style={styles.progressBoxSmall}>
              <Text style={styles.progressNumberSmall}>7</Text>
              <Text style={styles.progressLabel}>Day Streak</Text>
            </View>
            <View style={styles.progressBoxSmall}>
              <Text style={styles.progressNumberSmall}>1.2h</Text>
              <Text style={styles.progressLabel}>Active Time</Text>
            </View>
          </View>

          <View style={styles.energyRow}>
            <Clock size={16} color="#000" />
            <View style={{ marginLeft: 6 }}>
              <Text style={styles.energyLabel}>2:00 PM - 4:00 PM</Text>
              <Text style={styles.energyCaption}>Peak Energy Time</Text>
            </View>
          </View>
        </View>

        {/* Summary Progress (This Week) */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.cardHeaderLeft}>
              <Target size={18} color="#000" />
              <Text style={styles.cardTitle}>Summary Progress (This Week)</Text>
            </View>
            <Text style={styles.cardHelper}>Resets every week</Text>
          </View>

          <View style={styles.summaryRow}>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryNumber}>5</Text>
              <Text style={styles.summaryLabel}>Workouts</Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryNumber}>3.2h</Text>
              <Text style={styles.summaryLabel}>Total Time</Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryNumber}>1.8k</Text>
              <Text style={styles.summaryLabel}>Calories</Text>
            </View>
          </View>
        </View>

        {/* Progress – weekly / monthly */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.cardHeaderLeft}>
              <Target size={18} color="#000" />
              <Text style={styles.cardTitle}>Progress</Text>
            </View>
            <Pressable>
              <Text style={styles.viewAll}>View All →</Text>
            </Pressable>
          </View>

          {/* Weekly / Monthly toggle (non-functional for now) */}
          <View style={styles.toggleRow}>
            <Pressable style={[styles.togglePill, styles.togglePillActive]}>
              <Text style={[styles.toggleText, styles.toggleTextActive]}>
                Weekly
              </Text>
            </Pressable>
            <Pressable style={styles.togglePill}>
              <Text style={styles.toggleText}>Monthly</Text>
            </Pressable>
          </View>

          {/* Placeholder for chart / timeline */}
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartPlaceholderText}>
              Progress chart coming soon
            </Text>
          </View>

          <View style={styles.weekRow}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <Text key={d} style={styles.weekLabel}>
                {d}
              </Text>
            ))}
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingTop: 40, 
    paddingHorizontal: 20,
    paddingBottom: 140, 
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  userSubtitle: {
    fontSize: 12,
    color: "#4B5563",
  },
  bellWrapper: {
    position: "relative",
    padding: 6,
  },
  bellDot: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },
  motivationBanner: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  motivationText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#000",
    padding: 16,
    marginBottom: 18,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  cardHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  cardSubText: {
    fontSize: 12,
    color: "#4B5563",
  },
  progressGridTop: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  progressGridBottom: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  progressBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 6,
    paddingVertical: 16,
    alignItems: "center",
  },
  progressBoxSmall: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: "center",
  },
  progressNumber: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  progressNumberSmall: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  progressLabel: {
    fontSize: 11,
    color: "#4B5563",
  },
  energyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  energyLabel: {
    fontSize: 13,
    color: "#000",
  },
  energyCaption: {
    fontSize: 11,
    color: "#6B7280",
  },
  cardHelper: {
    fontSize: 12,
    color: "#6B7280",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  summaryBox: {
    flex: 1,
    alignItems: "center",
  },
  summaryNumber: {
    fontSize: 26,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: "#4B5563",
  },
  viewAll: {
    fontSize: 12,
    color: "#4B5563",
  },
  toggleRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  togglePill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
  },
  togglePillActive: {
    backgroundColor: "#000",
  },
  toggleText: {
    fontSize: 12,
    color: "#4B5563",
  },
  toggleTextActive: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  chartPlaceholder: {
    height: 140,
    borderRadius: 8,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12,
  },
  chartPlaceholderText: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  weekLabel: {
    fontSize: 11,
    color: "#6B7280",
  },
});
