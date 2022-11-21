import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Logout({ route, navigation, setUser }) {
  useEffect(() => {
    fetch("https://secretkeeperproject.herokuapp.com/logout", {
      withCredentials: "include",
      method: "DELETE",
    }).then(setUser('')).then(navigation.navigate("Home"))
  });
  return <Text style={styles.container}>Logged Out!</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252827",
    alignItems: "center",
    // justifyContent: "center",
  },
});
