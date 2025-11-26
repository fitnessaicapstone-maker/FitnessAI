// app/profile.tsx
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </Pressable>
        <Text style={styles.title}>Profile</Text>
        <Pressable onPress={() => router.push("profilemetrics")}>
          <Text style={styles.edit}>Edit</Text>
        </Pressable>
      </View>

      {/* User Info */}
      <View style={styles.card}>
        <View style={styles.userRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>

          <View>
            <Text style={styles.userName}>User</Text>
            <Text style={styles.gender}>Male</Text>
          </View>
        </View>

        <View style={styles.metricsRow}>
          <View>
            <Text style={styles.metricLabel}>Height</Text>
            <Text style={styles.metricValue}>175 cm</Text>
          </View>

          <View>
            <Text style={styles.metricLabel}>Weight</Text>
            <Text style={styles.metricValue}>70 kg</Text>
          </View>

          <View>
            <Text style={styles.metricLabel}>BMI</Text>
            <Text style={styles.metricValue}>22.9</Text>
          </View>
        </View>
      </View>

      {/* Measurements */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recorded Measurements</Text>

        <View style={styles.measureGrid}>
          {[
            ["Wrists", "18 cm"],
            ["Waist", "80 cm"],
            ["Chest", "95 cm"],
            ["R. Quad", "55 cm"],
            ["L. Quad", "55 cm"],
            ["R. Calf", "38 cm"],
            ["L. Calf", "38 cm"],
            ["R. Arm", "35 cm"],
            ["L. Arm", "35 cm"],
            ["R. Forearm", "28 cm"],
            ["L. Forearm", "28 cm"],
          ].map(([label, value], idx) => (
            <View key={idx} style={styles.measureCard}>
              <Text style={styles.measureLabel}>{label}:</Text>
              <Text style={styles.measureValue}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1, padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  back: { fontSize: 26, color: "black" },
  title: { fontSize: 28, fontWeight: "600", color: "black" },
  edit: { fontSize: 16, color: "black", textDecorationLine: "underline" },
  card: {
    borderWidth: 2,
    borderColor: "black",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  userRow: { flexDirection: "row", alignItems: "center", marginBottom: 25 },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  avatarText: { fontSize: 20, color: "black" },
  userName: { fontSize: 22, color: "black" },
  gender: { color: "gray" },
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metricLabel: { color: "gray" },
  metricValue: { fontSize: 20, color: "black", marginTop: 5 },
  sectionTitle: { fontSize: 20, marginBottom: 15, color: "black" },
  measureGrid: { flexWrap: "wrap", flexDirection: "row" },
  measureCard: {
    width: "48%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: "2%",
  },
  measureLabel: { color: "gray" },
  measureValue: { color: "black", fontSize: 16 },
});
