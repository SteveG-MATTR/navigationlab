import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
