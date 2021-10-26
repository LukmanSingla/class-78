import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg_image.png")}
        style={styles.bg}
      >
        <View style={styles.container}>
          <SafeAreaView style={styles.safeView} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>ISS Tracker</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("IssScreen")}
          >
            <Image
              style={styles.img}
              source={require("../assets/iss_icon.png")}
            />
            <Text style={styles.routeText}>ISS Tracker</Text>
            <Text style={styles.knowMore}>Know More --{">"} </Text>
            <Text style={styles.bullets}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("MeteorsScreen")}
          >
            <Image
              style={styles.img}
              source={require("../assets/meteor_icon.png")}
            />
            <Text style={styles.routeText}>Meteors</Text>
            <Text style={styles.knowMore}>Know More --{">"} </Text>
            <Text style={styles.bullets}>2</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "white",
  },
  titleContainer: {
    flex: 0.15,
    justifyContent: "center",
  },
  safeView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  routeCard: {
    backgroundColor: "white",
    flex: 0.25,
    marginTop: 50,
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 30,
    width: "80%",
  },
  routeText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  bullets: {
    color: "rgba(183,183,183,0.5)",
    fontSize: 130,
    position: "absolute",
    right: 30,
  },
  img: {
    height: 200,
    width: 200,
    position: "absolute",
    top: -100,
    right: 0,
    resizeMode: "contain",
  },
  knowMore: {
    color: "red",
  },
});
