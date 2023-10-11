import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import MyIcon from "../assets/icons/MyIcon";
import { useRoute } from "@react-navigation/native";

const DynamicScreen = () => {
  const route = useRoute();
  const { itemId, name } = route.params;
  const [messages, setMessages] = useState([
    { text: `Hello ${name}, how are you doing today?`, isMine: true },
    { text: "I'm good, thanks! How about you?", isMine: false },
    { text: "I'm doing great, thanks for asking!", isMine: true },
    { text: "This is another message from the other person.", isMine: false },
  ]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.isMine ? styles.sent : styles.received,
            ]}
          >
            <Text
              style={message.isMine ? styles.sentText : styles.receivedText}
            >
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageInput}
          onChangeText={setMessageInput}
          placeholder="Type a message..."
        />
        <MyIcon style={styles.icon} width={30} height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageContainer: {
    flexGrow: 1,
    padding: 16,
  },
  message: {
    alignSelf: "flex-start",
    maxWidth: "70%",
    borderRadius: 12,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#007BFF",
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
  },
  sentText: {
    fontSize: 16,
    color: "white",
  },
  receivedText: {
    fontSize: 16,
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 26,
    paddingVertical: 22,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    borderColor: "#C2C2C2",
    borderWidth: 1,
    borderRadius: 24,
    padding: 10,
    marginRight: 12,
  },
  icon: {
    alignSelf: "center",
  },
});

export default DynamicScreen;
