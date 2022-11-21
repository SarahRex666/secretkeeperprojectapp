import {
  Clipboard,
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

export default function Message({ navigation, user }) {
  const [userNameInput, setUserNameInput] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const route = useRoute();

  function handleSubmit() {
    fetch("https://secretkeeperproject.herokuapp.com/message", {
      method: "POST",
      withCredentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        message: userMessage,
      }),
    })
      .then((r) => r.json())
      .then(navigation.navigate("Profile"));
  }

  return (
    <View style={StyleSheet.inputview}>
    <Text>Your link is:</Text>
    <Text>{`https://secretkeepernext.vercel.app/${user.id}`}</Text>
    </View>
  );
}
