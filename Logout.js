import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Logout({ route, navigation, setUser }) {
  useEffect(() => {
    fetch("https://secretkeeperproject.herokuapp.com/logout", {
      withCredentials: "include",
      method: "DELETE",
    }).then(setUser(''))
  });
  return <Text>Logged Out!</Text>;
}
