import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View className='flex-1 items-center justify-center bg-white'>
        <Link href="/" className='text-blue-500'>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}
