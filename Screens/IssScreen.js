import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

export default class IssScreen extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
    };
  }

  getIssLocation = () => {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => {
        this.setState({
          location: response.data,
        });
      })
      .catch((error) => Alert.alert(error.message));
  };

  componentDidMount() {
    this.getIssLocation();
    console.log(Object.keys(this.state.location));
  }

  render() {
    if (Object.keys(this.state.location).length == 0) {
      return <Text>Loading....</Text>;
    } else {
      return (
        <ImageBackground
          source={require("../assets/iss_bg.jpg")}
          style={styles.bg}
        >
          <View style={styles.container}>
            <SafeAreaView style={styles.safeView} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>ISS-Location</Text>
            </View>
            <View style={styles.map}>
              <MapView
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={styles.mapView}
              />
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  safeView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 40,
    color: "white",
  },
  titleContainer: {
    flex: 0.15,
    justifyContent: "center",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  map: {
    flex: 0.5,
  },
  mapView: {
    width: "100%",
    height: "100%",
  },
});
