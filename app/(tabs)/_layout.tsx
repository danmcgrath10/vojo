import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
        backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'planet' : 'planet-outline'} color={color} size={24} />
          ),
        }}
      />,
      <Tabs.Screen
        name="friends"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-circle-outline' : 'people-circle-sharp'} color={color} size={24}/>
          ),
        }}
      />,
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'camera-outline' : 'camera-sharp'} color={color} size={24}/>
          ),
        }}
      />,
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'mail-outline' : 'mail-sharp'} color={color} size={24} />
          ),
        }}
      />,
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-outline' : 'person-sharp'} color={color} size={24}/>
          ),
        }}
      />,
    </Tabs>
  );
}
