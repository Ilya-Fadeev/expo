import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function CustomHeader(props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header_icon}>
        <Text style={styles.headerText}>{props.name}</Text>
        <FontAwesome
          style={styles.icon}
          name={props.iconName}
          size={24}
          color={"#000"}
        />
      </View>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",

    paddingVertical: 8, // Вертикальный отступ
    height: 130,
    justifyContent: "flex-end",
    width: "100%",
  },
  headerText: {
    color: "#000",
    fontWeight: "regular",
    fontSize: 28,
    paddingHorizontal: 25, // Горизонтальный отступ
  },
  divider: {
    borderBottomWidth: 0.6,
    borderBottomColor: "#C6C6C8",
    paddingTop: 15,
  },
  header_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 25,
  },
});

export default CustomHeader;
