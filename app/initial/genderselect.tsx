import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GenderSelectionScreen() {
  const [selected, setSelected] = useState<"male" | "female" | null>(null);

  const onContinue = () => {
    router.push("/initial/bodymetrics");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your fitness mode</Text>

      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={[styles.optionBox, selected === "male" && styles.selected]}
          onPress={() => setSelected("male")}
        >
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.optionText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionBox, selected === "female" && styles.selected]}
          onPress={() => setSelected("female")}
        >
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.optionText}>Female</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>You can change this later in Profile Settings</Text>

      <TouchableOpacity
        style={[styles.button, !selected && styles.buttonDisabled]}
        disabled={!selected}
        onPress={onContinue}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 60,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  optionBox: {
    width: 150,
    height: 180,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "#e6e6e6",
  },
  icon: {
    fontSize: 42,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  note: {
    textAlign: "center",
    color: "#666",
    marginTop: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonDisabled: {
    backgroundColor: "#999",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
