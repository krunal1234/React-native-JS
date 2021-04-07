import { setStatusBarHidden, setStatusBarStyle } from 'expo-status-bar';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation/>
      <StatusBar barStyle="light-content"/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
