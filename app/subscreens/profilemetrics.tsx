// app/profilemetrics.tsx
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function ProfileMetricsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </Pressable>
        <Text style={styles.title}>Body Metrics</Text>
      </View>

      <View style={styles.card}>
        {[
          "Height (cm)",
          "Weight (kg)",
          "BMI",
          "Waist (cm)",
          "Chest (cm)",
          "R. Quad (cm)",
          "L. Quad (cm)",
          "R. Calf (cm)",
          "L. Calf (cm)",
          "R. Arm (cm)",
          "L. Arm (cm)",
        ].map((label, idx) => (
          <View key={idx} style={styles.field}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder="Enter value" />
          </View>
        ))}
      </View>

      <Pressable style={styles.saveBtn} onPress={() => router.back()}>
        <Text style={styles.saveText}>Save</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1, padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  back: { fontSize: 28, marginRight: 15, color: "black" },
  title: { fontSize: 26, color: "black" },
  card: { padding: 20, borderWidth: 2, borderColor: "black", borderRadius: 16 },
  field: { marginBottom: 20 },
  label: { color: "black", marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 12,
    borderRadius: 8,
  },
  saveBtn: {
    marginTop: 25,
    backgroundColor: "black",
    padding: 16,
    borderRadius: 10,
  },
  saveText: { textAlign: "center", color: "white", fontSize: 16 },
});
