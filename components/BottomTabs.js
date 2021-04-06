import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, View } from 'react-native';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Profile from './Profile';
  
const BottomTab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <BottomTab.Navigator
        initialRouteName="Home">
        <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={30} />,
            tabBarLabel : ({ focused }) => false
        }}
        />
        <BottomTab.Screen
        name="Product"
        component={ProductNavigator}
        options={{
            tabBarIcon: ({ color }) => <Ionicons name="ios-albums" color={color} size={30} />,
            tabBarLabel : ({ focused }) => false
        }}
        />
        <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
            tabBarIcon: ({ color }) => <Ionicons name="ios-cart" color={color} size={30} />,
            tabBarLabel : ({ focused }) => false
        }}
        />
        <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
            tabBarIcon: ({ color }) => <Ionicons name="ios-person" color={color} size={30} />,
            tabBarLabel : ({ focused }) => false
        }}
        />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ 
          headerLeft: () => (
            <Ionicons name="menu-outline" size={30} onPress={() => navigation.toggleDrawer()} color="#FFF" style={{marginLeft : 10}}/>
          ),
          headerTitle: 'Mera Market', 
          headerTitleAlign: 'left', 
          headerTintColor: 'white' , 
          headerStyle:{ backgroundColor : '#d40000' },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "600"
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const ProductStack = createStackNavigator();

function ProductNavigator() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Product"
        component={Product}
        options={{ headerTitle: 'Product' }}
      />
    </ProductStack.Navigator>
  );
}

const CartStack = createStackNavigator();

function CartNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={Cart}
        options={{ headerTitle: 'Cart' }}
      />
    </CartStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
