import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator cho Home
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Scan" 
        component={ScanScreen} 
        options={{ title: 'Scan QR Code' }} 
      />
    </Stack.Navigator>
  );
};

// Bottom Tabs Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Scan" 
        component={ScanScreen} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}
