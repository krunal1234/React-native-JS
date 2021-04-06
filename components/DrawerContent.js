import * as React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import{
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerContent({navigation}) {
  return (
    <View>
      <Drawer.Section style={styles.TopDrawerSection}>
        <View>
            <View style={{flexDirection : 'row',alignItems: 'center'}}>
              <View style={{flexDirection : 'column'}}>
                <Avatar.Text style={{margin: 10,color: '#FFF',backgroundColor: '#FFF'}} size={50} label="K">
                </Avatar.Text>
              </View>
              <View style={{flexDirection : 'column'}}>
                <Text styles={{color: '#FFF'}}>Krunal Makwana</Text>
                <Caption styles={{color: '#FFF'}}>7405076858</Caption>
              </View>
            </View>
          </View>
        </Drawer.Section>
      <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon = {({color,size}) => (
              <Ionicons
                name= "home"
                color= {color}
                size = {size}
              />
            )}
            label = "Home"
            onPress = {() => { navigation.navigate('Home'); }}
          />
          <DrawerItem
            icon = {({color,size}) => (
              <Ionicons
                name= "albums" 
                color= {color}
                size = {size}
              />
            )}
            label = "Product"
            onPress = {() => { navigation.navigate('Product'); }}
          />
          <DrawerItem
            icon = {({color,size}) => (
              <Ionicons
                name= "cart"
                color= {color}
                size = {size}
              />
            )}
            label = "Cart"
            onPress = {() => { navigation.navigate('Cart') }}
          />
          <DrawerItem
            icon = {({color,size}) => (
              <Ionicons
                name= "person"
                color= {color}
                size = {size}
              />
            )}
            label = "Profile"
            onPress = {() => {  navigation.navigate('Profile') }}
          />
          <DrawerItem
            icon = {({color,size}) => (
              <Ionicons
                name= "log-out"
                color= {color}
                size = {size}
              />
            )}
            label = "Sign Out"
            onPress = {() => {}}
          />
        </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  TopDrawerSection : {
    borderBottomWidth: 0,
    backgroundColor: '#d40000'
  },
  bottomDrawerSection : {
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1
  }
});