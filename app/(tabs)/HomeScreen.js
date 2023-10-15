import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import DB from "../../constants/DB";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {DB.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate("Messages", {
              itemId: item.id,
              name: item.text,
            })
          }
        >
          <View style={styles.conv} title={item.text}>
            <View style={styles.conv__img_info}>
              <Image style={styles.circle} source={{ uri: item.avatar }} />
              <View style={styles.block}>
                <Text style={styles.text_name}>{item.text}</Text>
                <Text style={styles.last_time}>{item.last_time}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Modal", {
                  itemId: item.id,
                  avatar: item.avatar,
                  name: item.text,
                })
              }
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../../assets/icons/information_icon.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  divider: {
    borderBottomWidth: 0.6,
    borderBottomColor: "#C6C6C8",
    marginVertical: 20,
  },
  conv: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  text_name: {
    fontWeight: "500",
    fontSize: 16,
  },
  last_time: {
    fontSize: 14,
    color: "gray",
  },
  circle: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  block: {
    justifyContent: "center",
  },
  info: {
    width: 20,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  conv__img_info: {
    flexDirection: "row",
    gap: 10,
  },
});

export default HomeScreen;
