import { ImageBackground, StyleSheet, Text, View } from "react-native";

import coffeeSplash from "@/assets/images/coffee-splash.png";

const contact = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={coffeeSplash}
        resizeMode="cover"
      >
        <Text style={styles.text}>contact us</Text>
        <Text style={styles.text}>We have the best coffee in town!</Text>
        <Text style={styles.text}>Phone: 555-555-5555</Text>
        <View>
          <Text style={styles.text}>233 Best Wood Dr.</Text>
          <Text style={styles.text}>Rusty, AK 24423</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
