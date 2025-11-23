import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function BodyMetricsScreen() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const onContinue = () => {
    router.push("/initial/tour");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Initial Profile Setup</Text>
      <Text style={styles.description}>
        This information helps us personalize your fitness journey. All data is kept secure and private to you.
      </Text>

      {/* Height + Weight */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Height and Weight</Text>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Height (cm)</Text>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              placeholder="175"
              placeholderTextColor="#777"
            />
          </View>

          <View style={styles.col}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              placeholder="70"
              placeholderTextColor="#777"
            />
          </View>
        </View>
      </View>

      {/* Body Measurements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Body Measurements</Text>

        {renderFieldRow("Wrists", "Waist", "Chest")}
        {renderFieldRow("Right Quad", "Left Quad")}
        {renderFieldRow("Right Calf", "Left Calf")}
        {renderFieldRow("Right Arm", "Left Arm")}
        {renderFieldRow("Right Forearm", "Left Forearm")}
      </View>

      {/* Body Type */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Body Type Selection</Text>
        <View style={styles.dropdown}>
          <Text style={{ color: "#777" }}>Select your body type</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Save & Continue</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function renderFieldRow(label1: string, label2?: string, label3?: string) {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>{label1}</Text>
          <TextInput style={styles.input} placeholder="-" placeholderTextColor="#777" />
        </View>

        {label2 && (
          <View style={styles.col}>
            <Text style={styles.label}>{label2}</Text>
            <TextInput style={styles.input} placeholder="-" placeholderTextColor="#777" />
          </View>
        )}
      </View>

      {label3 && (
        <View style={{ marginTop: 10 }}>
          <Text style={styles.label}>{label3}</Text>
          <TextInput style={styles.input} placeholder="-" placeholderTextColor="#777" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  section: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  col: {
    flex: 1,
  },
  label: {
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 12,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
