import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logout from "./Logout";
import { useRoute } from "@react-navigation/native";

export default function Home({ route, navigation, user, setUser }) {
  if (user && user.id){
    return (
      <View style={styles.container}>
      <Image style={{ width: 300, height: 300}} source={{uri: "https://i.ibb.co/XFcknLB/spyro.png"}} />
          <Button color="white" title="Profile" onPress={() => navigation.navigate("Profile")}/>
          <Button color="white" title="Sign Out" onPress={() => navigation.navigate("Logout")} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image style={{ width: 300, height: 300}} source={{uri: "https://i.ibb.co/XFcknLB/spyro.png"}} />
      <Button color="white" title="Login" onPress={() => navigation.navigate("Login")} />
      <Button color="white" title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252827",
    alignItems: "center",
    // justifyContent: "center",
  },
});
