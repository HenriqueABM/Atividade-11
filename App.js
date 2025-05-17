import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/3b/55/8d/3b558d0f8f0a8e7a8e6e4e4e4e4e4e4e.jpg' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#4fc3f7',
            tabBarInactiveTintColor: '#b3e5fc',
            tabBarStyle: {
              backgroundColor: 'rgba(21, 101, 192, 0.8)',
              borderTopWidth: 2,
              borderTopColor: '#4fc3f7',
            },
            headerStyle: {
              backgroundColor: 'rgba(21, 101, 192, 0.8)',
              borderBottomWidth: 2,
              borderBottomColor: '#4fc3f7',
            },
            headerTintColor: '#fff',
          }}
        >
          <Tab.Screen
            name="MegaSena"
            component={MegaSenaScreen}
            options={{
              tabBarLabel: 'Mega Sena',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="numeric" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="JogoDoBicho"
            component={JogoDoBichoScreen}
            options={{
              tabBarLabel: 'Jogo do Bicho',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="paw" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});