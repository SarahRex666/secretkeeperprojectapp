import {
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
import * as Clipboard from 'expo-clipboard';

export default function Message({ navigation, user }) {

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(`https://secretkeepernext.vercel.app/${user.id}`);
  };


  return (
    <View style={styles.container}>
    <Text style={styles.text}>Your link is:</Text>
    <Text style={styles.text}>{`https://secretkeepernext.vercel.app/${user.id}`}</Text>
    <Button color="white" onPress={copyToClipboard} title="Copy" />
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
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
    text: {
    color: "white"
  }
});