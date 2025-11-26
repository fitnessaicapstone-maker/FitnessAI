import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const goToSignup = () => router.push("/initial/signup");
  const goToHome = () => router.replace("/(tabs)/screens/Home");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Pressable style={styles.buttonWhite} onPress={goToHome}>
        <Text style={styles.buttonTextBlack}>Login with Google</Text>
      </Pressable>

      <Pressable style={styles.buttonBlack} onPress={goToHome}>
        <Text style={styles.buttonTextWhite}>Login with Apple</Text>
      </Pressable>

      <Pressable onPress={goToSignup}>
        <Text style={styles.link}>Create a new account</Text>
      </Pressable>

      <Text style={styles.terms}>Terms & Privacy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginBottom: 60,
    color: "black",
    fontWeight: "600",
  },
  buttonWhite: {
    borderWidth: 2,
    borderColor: "black",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonBlack: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonTextBlack: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
  },
  buttonTextWhite: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    textAlign: "center",
    color: "black",
    marginTop: 20,
    textDecorationLine: "underline",
    fontSize: 15,
  },
  terms: {
    textAlign: "center",
    marginTop: 80,
    color: "gray",
    fontSize: 13,
  },
});
