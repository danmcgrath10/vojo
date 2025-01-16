import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/images/vojo-path.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.title}>Vojo</Text>
      <Text style={styles.slogan}>Your path to free expression</Text>

      {/* Buttons */}
      <Link href="/(auth)/(signup)" asChild>
        <Button mode="contained" style={styles.button}>
          Create Account
        </Button>
      </Link>
      <Link href="/login" asChild>
        <Button mode="outlined" style={styles.button}>
          Sign In
        </Button>
      </Link>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: 15,
    marginBottom: 100,
  },
  button: {
    marginVertical: 10,
    width: '80%',
  },
});
