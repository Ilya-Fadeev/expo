import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function ModalScreen() {
  const route = useRoute();
  const { itemID, avatar, name } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.column}>
          <Text style={styles.label}>Appointments</Text>
          <Text style={styles.label}>Spent</Text>
          <Text style={styles.label}>Referrals</Text>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.label}>Birthday</Text>
          <Text style={styles.label}>Instagram</Text>
          <Text style={styles.label}>Facebook</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
          <Text style={styles.text}>123</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.sendMessageButton}
        onPress={() => {
          // Добавьте действие, которое нужно выполнить при нажатии кнопки "Send Message"
        }}
      >
        <Text style={styles.sendMessageButtonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  table: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: "#007AFF", // Цвет, который используется для ссылок в iOS
  },
  sendMessageButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  sendMessageButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
