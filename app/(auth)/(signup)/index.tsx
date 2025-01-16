import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

const Step1 = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    birthdate: '',
  });
  const [error, setError] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const handleDateChange = (_event: any, selectedDate: { toLocaleDateString: (arg0: string, arg1: { month: string; day: string; year: string; }) => any; }) => {
    setDatePickerVisible(false); // Close the picker
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      });
      setFormData({ ...formData, birthdate: formattedDate });
    }
  };

  const handleNext = () => {
    if (!formData.email || !formData.password || !formData.birthdate) {
      setError(true);
      return;
    }

    // Navigate to Step 2
    router.push({
      pathname: '/sign-up/step2',
      params: { ...formData },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Your account</Text>

      {/* Hosting Provider (Read-only Field) */}
      <Text style={styles.label}>Hosting provider</Text>
      <View style={styles.readOnlyField}>
        <Text style={styles.readOnlyText}>Bluesky Social</Text>
      </View>

      {/* Email Input */}
      <TextInput
        label="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        style={styles.input}
        mode="flat"
        keyboardType="email-address"
        autoCapitalize="none"
        error={error && !formData.email}
        theme={{
          colors: {
            text: 'white',
            placeholder: 'gray',
            background: 'transparent',
          },
        }}
      />
      {error && !formData.email && (
        <HelperText type="error" visible={error}>
          Email is required.
        </HelperText>
      )}

      {/* Password Input */}
      <TextInput
        label="Password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        style={styles.input}
        mode="flat"
        secureTextEntry
        error={error && !formData.password}
        theme={{
          colors: {
            text: 'white',
            placeholder: 'gray',
            background: 'transparent',
          },
        }}
      />
      {error && !formData.password && (
        <HelperText type="error" visible={error}>
          Password is required.
        </HelperText>
      )}

      {/* Birthdate Selector */}
      <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
        <TextInput
          label="Your birth date"
          value={formData.birthdate}
          editable={false}
          style={styles.input}
          mode="flat"
          placeholder="MM/DD/YYYY"
          error={error && !formData.birthdate}
          theme={{
            colors: {
              text: 'white',
              placeholder: 'gray',
              background: 'transparent',
            },
          }}
        />
      </TouchableOpacity>
      {error && !formData.birthdate && (
        <HelperText type="error" visible={error}>
          Birthdate is required.
        </HelperText>
      )}

      {datePickerVisible && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={new Date()} // Restrict to past dates only
        />
      )}

      {/* Next Button */}
      <Button
        mode="contained"
        onPress={handleNext}
        style={styles.nextButton}
        contentStyle={{ paddingVertical: 8 }}
      >
        Next
      </Button>

      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.languageText}>English</Text>
        <TouchableOpacity>
          <Text style={styles.supportText}>Having trouble? Contact support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'left',
  },
  label: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 8,
  },
  readOnlyField: {
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  nextButton: {
    marginTop: 20,
  },
  backButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  backButtonText: {
    color: 'gray',
    fontSize: 16,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  languageText: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 8,
  },
  supportText: {
    color: '#007bff',
    fontSize: 14,
  },
});
