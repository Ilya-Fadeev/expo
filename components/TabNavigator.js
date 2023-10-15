import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import CustomHeader from "./Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../app/(tabs)/HomeScreen";
import ProfileScreen from "../app/(tabs)/ProfileScreen";
import Message from "../assets/icons/components/Message";
import Contact from "../assets/icons/components/Contact";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingVertical: 10, paddingHorizontal: 20 },
        tabStyle: {
          padding: 10,
          alignItems: "center",
          flex: 1,
        },
        activeTintColor: "#D82A11",
        inactiveTintColor: "#fff",
        labelStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen
        name="InboxTab"
        component={HomeScreen}
        options={({ route }) => ({
          header: () => (
            <CustomHeader name={"Inbox"} iconName={"filter"} color="black" />
          ),
          tabBarLabel: "",
          tabBarIcon: ({ color, size = 25 }) => (
            <Message width={size} height={size} fill={color} />
            /* <FontAwesome
              name="envelope"
              size={size}
              color={route.state?.index === 0 ? "#D82A11" : color}
            /> */
          ),
        })}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={({ route }) => ({
          header: () => <CustomHeader name={"Profile"} iconName={"plus"} />,
          tabBarLabel: "",
          tabBarIcon: ({ color, size = 25 }) => (
            <Contact width={size} height={size} fill={color} />
            /* <FontAwesome
              name="user"
              size={size}
              color={route.state?.index === 0 ? "#D82A11" : color}
            /> */
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
