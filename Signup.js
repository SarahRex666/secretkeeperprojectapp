import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";

export default function Signup({ navigation }) {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [user, setUser] = useState("");

  const route = useRoute();

  function handleSubmit() {
    fetch("https://secretkeeperproject.herokuapp.com/signup", {
      method: "POST",
      withCredentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userNameInput,
        password: passwordInput,
      }),
    }).then(navigation.navigate("Home"))
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
      color="white"
        placeholder="Username"
        placeholderTextColor="white"
        onChangeText={(text) => setUserNameInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
                placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={(text) => setPasswordInput(text)}
      />
      <Button color="white" onPress={handleSubmit} title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252827",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "gray",
    width: "75%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "white"
  },
});