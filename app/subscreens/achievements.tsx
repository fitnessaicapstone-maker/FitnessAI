// app/subscreens/achievements.tsx
import { useRouter } from "expo-router";
import {
    ArrowLeft,
    Award,
    Lock,
    Target,
    Trophy,
    Zap,
} from "lucide-react-native";
import React from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function AchievementsScreen() {
  const router = useRouter();

  const completed = [
    {
      id: 1,
      name: "Consistency King",
      description: "7-day workout streak",
      icon: Trophy,
      date: "Completed Oct 15, 2025",
    },
    {
      id: 2,
      name: "Strength Builder",
      description: "Bench press 225 lbs",
      icon: Zap,
      date: "Completed Oct 12, 2025",
    },
  ];

  const inProgress = [
    {
      id: 3,
      name: "Iron Warrior",
      description: "30-day workout streak",
      progress: 70,
      current: 21,
      target: 30,
      icon: Target,
    },
    {
      id: 4,
      name: "Weight Progression",
      description: "Auto-increase weight 5 times",
      progress: 60,
      current: 3,
      target: 5,
      icon: Award,
    },
  ];

  const locked = [
    {
      id: 5,
      name: "Beast Mode",
      description: "Complete 100 workouts",
      current: 45,
      target: 100,
      icon: Lock,
    },
    {
      id: 6,
      name: "Endurance Master",
      description: "Run 100 miles total",
      current: 28,
      target: 100,
      icon: Lock,
    },
  ];

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.headerBackButton,
            pressed && styles.headerBackButtonPressed,
          ]}
        >
          <ArrowLeft size={20} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Achievements</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Completed */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed</Text>
          {completed.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <View key={achievement.id} style={styles.completedCard}>
                <View style={styles.cardInnerRow}>
                  <View style={styles.completedIconCircle}>
                    <Icon size={24} color="#FFF" />
                  </View>
                  <View style={styles.cardTextArea}>
                    <Text style={styles.cardTitle}>{achievement.name}</Text>
                    <Text style={styles.cardDescription}>
                      {achievement.description}
                    </Text>
                    <Text style={styles.cardDate}>{achievement.date}</Text>
                  </View>
                  <Text style={styles.trophyEmoji}>🏆</Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* In Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>In Progress</Text>
          {inProgress.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <View key={achievement.id} style={styles.inProgressCard}>
                <View style={styles.cardInnerRow}>
                  <View style={styles.inProgressIconCircle}>
                    <Icon size={24} color="#000" />
                  </View>
                  <View style={styles.cardTextArea}>
                    <Text style={styles.cardTitle}>{achievement.name}</Text>
                    <Text style={styles.cardDescription}>
                      {achievement.description}
                    </Text>
                  </View>
                </View>

                <View>
                  <View style={styles.progressHeaderRow}>
                    <Text style={styles.progressLabel}>
                      {achievement.current} / {achievement.target}
                    </Text>
                    <Text style={styles.progressLabel}>
                      {achievement.progress}%
                    </Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${achievement.progress}%` },
                      ]}
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/* Locked */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Locked</Text>
          {locked.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <View key={achievement.id} style={styles.lockedCard}>
                <View style={styles.cardInnerRow}>
                  <View style={styles.lockedIconCircle}>
                    <Icon size={24} color="#9CA3AF" />
                  </View>
                  <View style={styles.cardTextArea}>
                    <Text style={styles.lockedTitle}>{achievement.name}</Text>
                    <Text style={styles.lockedDescription}>
                      {achievement.description}
                    </Text>
                    <Text style={styles.lockedProgressText}>
                      {achievement.current} / {achievement.target}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 14,
    borderBottomWidth: 2,
    borderColor: "#000000",
  },
  headerBackButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  headerBackButtonPressed: {
    backgroundColor: "#F3F4F6",
  },
  headerTitle: {
    fontSize: 22,
    color: "#000000",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 12,
  },
  completedCard: {
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  inProgressCard: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  lockedCard: {
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    opacity: 0.6,
  },
  cardInnerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  completedIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  inProgressIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  lockedIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardTextArea: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: "#4B5563",
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 11,
    color: "#6B7280",
  },
  trophyEmoji: {
    fontSize: 24,
    marginLeft: 8,
  },
  progressHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 13,
    color: "#000000",
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#020617",
  },
  lockedTitle: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 4,
  },
  lockedDescription: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 6,
  },
  lockedProgressText: {
    fontSize: 11,
    color: "#6B7280",
  },
});
