import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import PremiumScreen from './screens/PremiumScreen';
import { supabase } from './supabaseClient';

const Stack = createStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [sessionChecked, setSessionChecked] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setSessionChecked(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!sessionChecked) return null;

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {session ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
            <Stack.Screen name="List" component={ListScreen} options={{ title: 'Liste' }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Détail' }} />
            <Stack.Screen name="Premium" component={PremiumScreen} options={{ title: 'Premium' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion' }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Inscription' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
            <Stack.Screen name="List" component={ListScreen} options={{ title: 'Liste' }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Détail' }} />
            <Stack.Screen name="Premium" component={PremiumScreen} options={{ title: 'Premium' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}