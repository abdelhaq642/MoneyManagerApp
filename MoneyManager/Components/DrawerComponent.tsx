import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import LoginScreen from "../NavigationScreen/LoginScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

export default function DrawerComponent() {
  return (
    <Drawer.Navigator drawerStyle={styles.Drawer}>
      <Drawer.Screen name="home" component={LoginScreen} />
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
    backgroundColor: "blue",
  },
});