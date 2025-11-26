import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Icons from lucide-react-native
import { Bot, Dumbbell, Home, TrendingUp } from "lucide-react-native";

export default function TourScreen() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      icon: Home,
      title: "Home",
      description: "Track progress, view stats, and daily motivation",
    },
    {
      icon: Dumbbell,
      title: "Workouts",
      description: "Create custom workouts or AI-generated routines",
    },
    {
      icon: TrendingUp,
      title: "Progress",
      description: "Monitor improvements with detailed analytics",
    },
    {
      icon: Bot,
      title: "AI Coach",
      description: "Real-time form feedback and guidance",
    },
  ];

  const CurrentIcon = slides[current].icon;

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else router.replace("/screens/Home");
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <Pressable
        style={styles.skipButton}
        onPress={() => router.replace("/screens/Home")}
      >
        <Text style={styles.skipText}>Skip Tour</Text>
      </Pressable>

      {/* Main Content */}
      <View style={styles.center}>
        <View style={styles.iconWrapper}>
          <CurrentIcon color="black" size={64} />
        </View>

        <Text style={styles.title}>{slides[current].title}</Text>
        <Text style={styles.description}>{slides[current].description}</Text>

        {/* Progress Dots */}
        <View style={styles.dotsRow}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === current ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonRow}>
        <Pressable
          onPress={prev}
          disabled={current === 0}
          style={[
            styles.prevButton,
            current === 0 && { opacity: 0.3 },
          ]}
        >
          <Text style={styles.prevText}>Previous</Text>
        </Pressable>

        <Pressable onPress={next} style={styles.nextButton}>
          <Text style={styles.nextText}>
            {current === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  skipButton: {
    alignSelf: "flex-end",
    padding: 20,
  },
  skipText: {
    color: "black",
    fontSize: 14,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  iconWrapper: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 100,
    width: 128,
    height: 128,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },

  title: {
    fontSize: 28,
    color: "black",
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  dotsRow: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 8,
  },

  dot: {
    height: 8,
    borderRadius: 4,
  },

  dotActive: {
    width: 30,
    backgroundColor: "black",
  },

  dotInactive: {
    width: 10,
    backgroundColor: "#d1d5db",
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
    padding: 20,
  },

  prevButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
  },

  nextButton: {
    flex: 1,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
  },

  prevText: {
    color: "black",
    fontSize: 14,
  },

  nextText: {
    color: "white",
    fontSize: 14,
  },
});
