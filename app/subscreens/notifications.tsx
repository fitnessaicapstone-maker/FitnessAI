import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Notifications() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </Pressable>

      <Text style={styles.title}>Notifications</Text>

      <View style={styles.box}>
        <Text>No notifications yet.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  back: { fontSize: 18, marginBottom: 20 },
  title: { fontSize: 26, marginBottom: 25 },
  box: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    borderRadius: 10,
  },
});
