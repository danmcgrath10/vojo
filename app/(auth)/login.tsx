import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  const handleAccountSelection = (account) => {
    console.log(`Selected account: ${account}`);
    // Handle account selection logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text variant="headlineMedium" style={styles.title}>
        Select account
      </Text>
      <Text style={styles.subtitle}>Sign in as...</Text>

      {/* Account Selection */}
      <TouchableOpacity
        style={styles.accountCard}
        onPress={() => handleAccountSelection("Mac Raith")}
      >
        <View style={styles.accountDetails}>
          <Text style={styles.accountName}>Mac Raith</Text>
          <Text style={styles.accountHandle}>macraithofficial.bsky.social</Text>
        </View>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.accountCard}
        onPress={() => handleAccountSelection("Other account")}
      >
        <Text style={styles.accountName}>Other account</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <Button
        mode="text"
        onPress={() => router.back()}
        style={styles.backButton}
      >
        Back
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
    alignContent: "left",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontSize: 16,
    textAlign: "left",
    marginBottom: 10,
  },
  accountCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  accountDetails: {
    flexDirection: "column",
  },
  accountName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  accountHandle: {
    color: "gray",
    fontSize: 14,
  },
  arrow: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 24,
    alignSelf: "center",
  },
});
