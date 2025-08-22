import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import coffeeBeans from "@/assets/images/coffee-beans3.jpg";
import { Stack } from "expo-router";

const contact = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen name="contact" options={{ headerShown: false }} />
      <ImageBackground
        style={styles.image}
        source={coffeeBeans}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.titleText}>Contact Us</Text>
          <LinearGradient
            colors={["#341100", "#7f5e35"]}
            style={styles.card}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
            <View
              style={{ flex: 1, paddingVertical: 80, gap: 24, paddingLeft: 12 }}
            >
              <View style={styles.contactFields}>
                <Ionicons name="call" size={24} color="#D8DAE8" />
                <Text style={{ color: "#D8DAE8", fontSize: 18 }}>
                  555-555-5555
                </Text>
              </View>
              <View style={styles.contactFields}>
                <Ionicons name="mail-open-outline" size={24} color="#D8DAE8" />
                <Text style={{ color: "#D8DAE8", fontSize: 18 }}>
                  abc123@gmail.co
                </Text>
              </View>
              <View style={styles.contactFields}>
                <Ionicons name="paper-plane" size={24} color="#D8DAE8" />
                <View>
                  <Text style={{ color: "#D8DAE8", fontSize: 18 }}>
                    412 Old Pine Rd.
                    {"\n"}
                    Falow, AK 43395
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 12,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name"
                  placeholderTextColor={"#D8DAE8"}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  placeholderTextColor={"#D8DAE8"}
                />
              </View>
              <TextInput
                placeholder="Message"
                style={styles.textMessageInput}
                placeholderTextColor={"#D8DAE8"}
              />
              <Pressable
                style={{
                  borderRadius: 12,
                  backgroundColor: "#D8DAE8",
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  marginTop: 14,
                }}
              >
                <Text>Send Message</Text>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

export default contact;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
  },
  card: {
    width: "90%",
    height: "65%",
    padding: 6,
    borderStyle: "solid",
    borderColor: "#D8DAE8",
    borderWidth: 1,
    borderTopRightRadius: 200,
  },
  contactFields: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    paddingLeft: 24,
    alignItems: "center",
  },
  textInput: {
    height: 40,
    padding: 4,
    width: screenWidth * 0.4,
    borderBottomColor: "#D8DAE8",
    borderBottomWidth: 1,
  },
  textMessageInput: {
    height: 40,
    padding: 4,
    color: "#D8DAE8",
    width: screenWidth * 0.825,
    borderBottomColor: "#D8DAE8",
    borderBottomWidth: 1,
  },
  titleText: {
    color: "#D8DAE8",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
