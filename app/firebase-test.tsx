import { useEffect, useState } from "react";

import { signInAnonymously } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase/config";

export default function FirebaseTestScreen() {
  const [status, setStatus] = useState("Checking Firebase...");

  useEffect(() => {
    async function testFirebase() {
      console.log("🔍 Firebase config test starting...");

      try {
        // Test auth
        await signInAnonymously(auth);
        console.log("✔ Firebase Auth Connected");

        // Test Firestore read
        const snapshot = await getDocs(collection(db, "test")); // you can change this to any collection
        console.log("✔ Firebase Firestore Connected");

        setStatus("Firebase Connected Successfully ✔");
      } catch (error) {
        console.error("❌ Firebase Error:", error);
        setStatus("Firebase FAILED ❌ — check console");
      }
    }

    testFirebase();
  }, []);

  // return (
  //   <View className="flex-1 items-center justify-center bg-white">
  //     <Text className="text-xl font-bold text-black">{status}</Text>
  //   </View>
  // );
}
