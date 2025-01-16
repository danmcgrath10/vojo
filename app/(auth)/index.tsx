import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Link href="/(tabs)" style={styles.link}>
        Go to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24, // 3xl equivalent in Tailwind
  },
  link: {
    color: "blue",
    fontSize: 16, // Default size for links
  },
});
