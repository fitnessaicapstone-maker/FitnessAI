// app/aichat.tsx
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function AIChat() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>AI Coach</Text>

        <Pressable>
          <Text style={styles.history}>🕘</Text>
        </Pressable>
      </View>

      {/* Messages */}
      <ScrollView style={styles.chatArea} contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.aiMsg}>
          👋 Hey there! I'm your AI coach. Ask me anything about training, diet, or workouts!
        </Text>
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Type your message..."
          style={styles.input}
        />
        <Pressable style={styles.sendBtn}>
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  backText: { fontSize: 18, color: "black" },
  title: { fontSize: 20, fontWeight: "600", color: "black" },
  history: { fontSize: 18 },
  chatArea: { flex: 1, padding: 16 },
  aiMsg: {
    backgroundColor: "#efefef",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: "80%",
  },
  inputBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    borderColor: "#ccc",
  },
  sendBtn: {
    marginLeft: 10,
    backgroundColor: "black",
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: "center",
  },
  sendText: { color: "white", fontWeight: "500" },
});
