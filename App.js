import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import MeteorsScreen from "./Screens/MeteorsScreen";
import IssScreen from "./Screens/IssScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

var Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MeteorsScreen" component={MeteorsScreen} />
          <Stack.Screen name="IssScreen" component={IssScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
