import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const goToSignup = () => {
    router.push("/initial/signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Pressable style={styles.buttonWhite}>
        <Text style={styles.buttonTextBlack}>Login with Google</Text>
      </Pressable>

      <Pressable style={styles.buttonBlack}>
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
    fontSize: 32,
    textAlign: "center",
    marginBottom: 60,
    color: "black",
  },
  buttonWhite: {
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonBlack: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonTextBlack: {
    color: "black",
    textAlign: "center",
  },
  buttonTextWhite: {
    color: "white",
    textAlign: "center",
  },
  link: {
    textAlign: "center",
    color: "black",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  terms: {
    textAlign: "center",
    marginTop: 80,
    color: "gray",
  },
});
