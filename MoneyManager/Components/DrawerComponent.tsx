import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Platform, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import LoginScreen from "../NavigationScreen/LoginScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import MainPage from "../NavigationScreen/MainPage";

const Drawer = createDrawerNavigator();

export default function DrawerComponent() {
  return (
    
    <Drawer.Navigator drawerStyle={styles.Drawer}>

       

      <Drawer.Screen name="Login" component={LoginScreen} 
      options = {{
        drawerIcon: config => <Icon
                size={23}
                name={"enter-outline"}></Icon>
      }}
      />

    <Drawer.Screen name="Main" component={MainPage} 
      options = {{
        drawerIcon: config => <Icon
                size={23}
                name={"home-outline"}></Icon>
      }}
      />
    </Drawer.Navigator>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Drawer: {
    backgroundColor: "white",
  },
});
