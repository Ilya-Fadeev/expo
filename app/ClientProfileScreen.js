import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import LeftArrow from "../assets/icons/left_arrow.svg";
import RightArrow from "../assets/icons/right_arrow.svg";

const ClientProfileScreen = () => {
  const route = useRoute();
  const { itemID, avatar, name } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <LeftArrow width={20} height={20} />
        </TouchableOpacity>
        <View>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.table1}>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Appointments</Text>
            <View style={styles.info}>
              <Text style={styles.text}>8</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Spent</Text>
            <View style={styles.info}>
              <Text style={styles.text}>$897</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Referrals</Text>
            <View style={styles.info}>
              <Text style={styles.text}>2</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}></Text>
            <View>
              <Text style={styles.text}></Text>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Phone</Text>
            <View style={styles.info}>
              <Text style={styles.text}>(704) 555-0127</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.info}>
              <Text style={styles.text}>tyra@gmail.com</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Address</Text>
            <View style={styles.info}>
              <Text style={styles.text}>San Jose, CA</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Birthday</Text>
            <View style={styles.info}>
              <Text style={styles.text}>10/28/2004</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Instagram</Text>
            <View style={styles.info}>
              <Text style={styles.text}>@rivyvo</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}>Facebook</Text>
            <View style={styles.info}>
              <Text style={styles.text}>/tyra.dhillon</Text>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.label}></Text>
            <View style={styles.info}>
              <Text style={styles.text}></Text>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View>
          <View style={styles.column1}>
            <Text style={styles.sendMessageText}>Send message</Text>
            <View>
              <RightArrow width={16} height={16} />
            </View>
          </View>
          <View style={styles.divider} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    paddingVertical: "10%",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    padding: 50,
    borderBottomWidth: 0.6,
    borderBottomColor: "#C6C6C8",
    marginBottom: 4,
  },
  avatar: {
    width: 50,
    borderRadius: 50,
    height: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: "regular",
  },
  table: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    width: "100%",
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  text: {
    justifyContent: "flex-end",
    fontSize: 16,
    color: "#616161",
    fontWeight: "400",
  },
  sendMessageButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  sendMessageText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
    color: "#0086FF",
  },
  backButton: {
    position: "absolute",
    left: 25,
    top: 65,
  },
  table1: {},
  column1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  divider: {
    borderBottomWidth: 0.6,
    borderBottomColor: "#C6C6C8",
    marginVertical: 2,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default ClientProfileScreen;
