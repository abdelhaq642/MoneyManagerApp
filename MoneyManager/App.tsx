import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerComponent from "./Components/DrawerComponent";
import LoginScreen from "./NavigationScreen/LoginScreen";
import BottomTabsComponent from "./Components/BottomTabsComponent"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login_Screen">
        <Stack.Screen name="Login_Screen" component={LoginScreen} />
      </Stack.Navigator> */}
     
      <DrawerComponent />
      
    </NavigationContainer>

    

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
