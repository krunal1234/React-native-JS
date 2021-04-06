import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './components/BottomTabs';
import DrawerContent from './components/DrawerContent';
import NotFound from './components/NotFound';

export default function Navigation() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
  
  const Stack = createStackNavigator();

  function RootNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabs} />
        <Stack.Screen name="NotFound" component={NotFound} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
  function DrawerNavigator() {
    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="RootNavigator" component={RootNavigator} />
      </Drawer.Navigator>
    );
  }