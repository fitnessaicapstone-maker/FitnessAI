// app/(tabs)/screens/Progress.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type ViewMode = "weekly" | "monthly" | "yearly";

const weeklyData = [
  { day: "Mon", workouts: 2, duration: "45 min" },
  { day: "Tue", workouts: 1, duration: "30 min" },
  { day: "Wed", workouts: 2, duration: "60 min" },
  { day: "Thu", workouts: 0, duration: "0 min" },
  { day: "Fri", workouts: 2, duration: "50 min" },
  { day: "Sat", workouts: 1, duration: "40 min" },
  { day: "Sun", workouts: 1, duration: "35 min" },
];

export default function ProgressScreen() {
  const [viewMode, setViewMode] = useState<ViewMode>("weekly");

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Progress</Text>

        {/* Toggle Buttons */}
        <View style={styles.toggleRow}>
          <TogglePill
            label="Weekly"
            active={viewMode === "weekly"}
            onPress={() => setViewMode("weekly")}
          />
          <TogglePill
            label="Monthly"
            active={viewMode === "monthly"}
            onPress={() => setViewMode("monthly")}
          />
          <TogglePill
            label="Yearly"
            active={viewMode === "yearly"}
            onPress={() => setViewMode("yearly")}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {viewMode === "weekly" && <WeeklyView />}
        {viewMode === "monthly" && <MonthlyView />}
        {viewMode === "yearly" && <YearlyView />}
      </ScrollView>
    </View>
  );
}

/* ---------- Weekly View ---------- */

function WeeklyView() {
  return (
    <View style={styles.sectionStack}>
      {/* Weekly Progress Bar Chart */}
      <Card title="Weekly Progress">
        <View style={styles.barChart}>
          {weeklyData.map((item, index) => {
            const barHeight = 20 + item.workouts * 35; // fake scale
            return (
              <View key={item.day} style={styles.barColumn}>
                <View style={[styles.bar, { height: barHeight }]} />
                <Text style={styles.barLabel}>{item.day}</Text>
              </View>
            );
          })}
        </View>
      </Card>

      {/* Daily Progress & Highs/Lows */}
      <Card title="Daily Progress & Highs/Lows">
        <View style={styles.dailyList}>
          {weeklyData.map((item, index) => (
            <View key={item.day} style={styles.dailyItem}>
              <View style={styles.dailyHeaderRow}>
                <Text style={styles.dailyDay}>{item.day}</Text>
                <Text style={styles.dailyDuration}>{item.duration}</Text>
              </View>

              <Text style={styles.dailySub}>
                {item.workouts} workouts completed
              </Text>

              {index === 4 && (
                <View style={styles.dailyHighlightRow}>
                  <Text style={styles.dailyHighlight}>
                    High: Max weight 225 lbs bench press 🔥
                  </Text>
                </View>
              )}

              {index === 3 && (
                <View style={styles.dailyLowRow}>
                  <Text style={styles.dailyLow}>Low: Rest day</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </Card>

      {/* Weekly Stats */}
      <Card title="Weekly Stats">
        <View style={styles.weeklyStatsRow}>
          <StatBlock value="5" label="Workouts" />
          <StatBlock value="3.2h" label="Total Time" />
          <StatBlock value="1.8k" label="Calories" />
        </View>

        <View style={styles.weeklyStatsDetails}>
          <Row label="Most Active Day" value="Friday" />
          <Row label="Avg. Workout Duration" value="38 min" />
          <Row label="Consistency Rate" value="71%" />
        </View>
      </Card>
    </View>
  );
}

/* ---------- Monthly View ---------- */

function MonthlyView() {
  return (
    <View style={styles.sectionStack}>
      {/* Progress Photos */}
      <Card title="Upload Progress Photo">
        <View style={styles.photoGrid}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.photoPlaceholder} />
          ))}
        </View>
        <OutlineButton label="Upload New Photo" icon="cloud-upload-outline" />
      </Card>

      {/* Workout Summary (Month) */}
      <Card title="Workout Summary (This Month)">
        <View style={styles.summaryList}>
          <Row label="Total Workouts" value="38" />
          <Row label="Total Activity" value="18.5 hours" />
          <Row label="Average Heart Rate" value="142 bpm" />
        </View>
      </Card>

      {/* Metrics Detailing */}
      <Card title="Metrics Detailing">
        <View style={styles.metricsSection}>
          <Text style={styles.metricsHeading}>Areas of Improvement</Text>
          <View style={styles.metricsList}>
            <Row label="Upper Body Strength" value="+15%" />
            <Row label="Chest (muscle density)" value="+8%" />
          </View>
        </View>

        <View style={styles.metricsSectionDivider} />

        <View style={styles.metricsSection}>
          <Text style={styles.metricsHeading}>Areas Needing Work</Text>
          <View style={styles.metricsList}>
            <Row label="Lower Body" value="-2%" />
            <Row label="Cardio Endurance" value="Needs Focus" />
          </View>
        </View>
      </Card>

      {/* Body Diagram */}
      <Card title="Body Diagram (Muscle Density)">
        <View style={styles.bodyDiagram}>
          <Text style={styles.bodyDiagramText}>Body Diagram Visualization</Text>
          <Text style={styles.bodyDiagramSub}>
            Showing muscle density changes
          </Text>
        </View>

        <OutlineButton label="Update Body Metrics" icon="fitness-outline" />
      </Card>
    </View>
  );
}

/* ---------- Yearly View ---------- */

function YearlyView() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const heights = [60, 70, 65, 80, 85, 90, 75, 95, 100, 85, 70, 10];

  return (
    <View style={styles.sectionStack}>
      {/* Yearly Trend */}
      <Card
        title={
          <View style={styles.yearlyTitleRow}>
            <Ionicons name="trending-up-outline" size={18} color="#000" />
            <Text style={styles.yearlyTitleText}>Yearly Trend</Text>
          </View>
        }
      >
        <View style={styles.barChart}>
          {months.map((month, index) => (
            <View key={month} style={styles.barColumn}>
              <View
                style={[
                  styles.bar,
                  { height: 20 + (heights[index] / 100) * 80 },
                ]}
              />
              <Text style={styles.yearlyMonth}>{month}</Text>
            </View>
          ))}
        </View>
      </Card>

      {/* Yearly Insights */}
      <Card title="Yearly Insights">
        <View style={styles.weeklyStatsRow}>
          <StatBlock value="240" label="Workouts" />
          <StatBlock value="156h" label="Total Time" />
          <StatBlock value="89k" label="Calories" />
        </View>

        {/* Goal progress bar */}
        <View style={styles.yearlyGoalBlock}>
          <Row label="Annual Goal Progress" value="80%" />
          <View style={styles.goalBarBackground}>
            <View style={[styles.goalBarFill, { width: "80%" }]} />
          </View>
        </View>

        <View style={styles.metricsSectionDivider} />

        <View style={styles.metricsList}>
          <Row label="Best Month" value="September (22 workouts)" />
          <Row label="Longest Streak" value="28 days" />
          <Row label="Total Weight Lifted" value="245,000 lbs" />
        </View>
      </Card>

      {/* Muscle Group Distribution */}
      <Card title="Muscle Group Distribution">
        <ProgressRow label="Upper Body" value="35%" width="35%" />
        <ProgressRow label="Lower Body" value="30%" width="30%" />
        <ProgressRow label="Core" value="20%" width="20%" />
        <ProgressRow label="Cardio" value="15%" width="15%" />
      </Card>
    </View>
  );
}

/* ---------- Reusable UI pieces ---------- */

function Card({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {typeof title === "string" ? (
          <Text style={styles.cardTitle}>{title}</Text>
        ) : (
          title
        )}
      </View>
      <View style={styles.cardBody}>{children}</View>
    </View>
  );
}

function TogglePill({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.togglePill,
        active && styles.togglePillActive,
      ]}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.toggleLabel,
          active && styles.toggleLabelActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.statBlock}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

function OutlineButton({
  label,
  icon,
}: {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <TouchableOpacity style={styles.outlineButton} activeOpacity={0.8}>
      {icon && (
        <Ionicons
          name={icon}
          size={18}
          color="#000"
          style={{ marginRight: 6 }}
        />
      )}
      <Text style={styles.outlineButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

function ProgressRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: number | string;
}) {
  return (
    <View style={styles.progressRow}>
      <View style={styles.row}>
        <Text style={styles.rowValue}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
      <View style={styles.goalBarBackground}>
        <View style={[styles.goalBarFill, { width: width as any }]} />
      </View>
    </View>
  );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 28, 
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 16,
    color: "#000",
  },
  toggleRow: {
    flexDirection: "row",
    gap: 8,
  },
  togglePill: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  togglePillActive: {
    backgroundColor: "#000",
  },
  toggleLabel: {
    color: "#000",
    fontSize: 14,
  },
  toggleLabelActive: {
    color: "#fff",
    fontWeight: "500",
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  sectionStack: {
    gap: 16,
    marginBottom: 24,
  },
  card: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  cardHeader: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  cardBody: {
    paddingHorizontal: 18,
    paddingBottom: 16,
    paddingTop: 4,
  },

  /* Weekly */
  barChart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 160,
    marginTop: 8,
    marginBottom: 4,
  },
  barColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 2,
  },
  bar: {
    width: "60%",
    backgroundColor: "#000",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  barLabel: {
    marginTop: 4,
    fontSize: 10,
    color: "#666",
  },
  dailyList: {
    gap: 8,
    marginTop: 8,
  },
  dailyItem: {
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d4d4d8",
    padding: 10,
  },
  dailyHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  dailyDay: {
    fontSize: 14,
    color: "#000",
  },
  dailyDuration: {
    fontSize: 12,
    color: "#6b7280",
  },
  dailySub: {
    fontSize: 12,
    color: "#6b7280",
  },
  dailyHighlightRow: {
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    marginTop: 6,
    paddingTop: 4,
  },
  dailyHighlight: {
    fontSize: 12,
    color: "#000",
  },
  dailyLowRow: {
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    marginTop: 6,
    paddingTop: 4,
  },
  dailyLow: {
    fontSize: 12,
    color: "#6b7280",
  },
  weeklyStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 12,
  },
  statBlock: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 28,
    color: "#000",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: "#6b7280",
  },
  weeklyStatsDetails: {
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    paddingTop: 8,
    gap: 6,
  },

  /* Monthly */
  photoGrid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
    marginBottom: 12,
  },
  photoPlaceholder: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
    borderWidth: 2,
    borderColor: "#000",
  },
  outlineButton: {
    marginTop: 4,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 999,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  outlineButtonText: {
    color: "#000",
    fontSize: 14,
  },
  summaryList: {
    marginTop: 8,
    gap: 8,
  },
  metricsSection: {
    marginTop: 8,
  },
  metricsHeading: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 4,
  },
  metricsList: {
    gap: 6,
  },
  metricsSectionDivider: {
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    marginVertical: 10,
  },
  bodyDiagram: {
    marginTop: 8,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 12,
    aspectRatio: 3 / 4,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyDiagramText: {
    color: "#6b7280",
    marginBottom: 4,
  },
  bodyDiagramSub: {
    color: "#9ca3af",
    fontSize: 11,
  },

  /* Yearly */
  yearlyTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  yearlyTitleText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  yearlyMonth: {
    fontSize: 9,
    color: "#6b7280",
    marginTop: 4,
  },
  yearlyGoalBlock: {
    marginTop: 12,
    marginBottom: 8,
    gap: 6,
  },
  goalBarBackground: {
    height: 6,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
    overflow: "hidden",
  },
  goalBarFill: {
    height: "100%",
    backgroundColor: "#000",
    borderRadius: 999,
  },
  progressRow: {
    marginTop: 10,
    gap: 4,
  },

  /* Generic row */
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLabel: {
    fontSize: 13,
    color: "#6b7280",
  },
  rowValue: {
    fontSize: 13,
    color: "#000",
  },
});
