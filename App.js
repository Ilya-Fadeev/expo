import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DynamicScreen from "./app/DynamicScreen";
import ModalScreen from "./app/ModalScreen";
import TabNavigator from "./components/TabNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        initialRouteName="InboxStack"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 120,
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "regular",
            fontSize: 28,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={TabNavigator}
        />

        <Stack.Screen name="Dynamic" component={DynamicScreen} />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
