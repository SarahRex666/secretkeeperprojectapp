import { User } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Profile({ route, navigation, user, setUser }) {

  useEffect(() => {
    fetch("https://secretkeeperproject.herokuapp.com/me", {
      withCredentials: "include",
    }).then((res) => res.json()).then((resp) => setUser(resp));
  }, []);

  if (user && user.id){
    return <View style={styles.container}>
    <Text
    style={styles.title}>{user.username}</Text>
    {
    user.messages.map((message) => <Text style={styles.text} key={message.id}>{message.message}</Text>)
    }
    <Button style={styles.link} color="white" title="Message" onPress={() => navigation.navigate("Message")}/>
    <Button style={styles.link} color="white" title="Sign Out" onPress={() => navigation.navigate("Logout")} />
  </View>
  } else return <View></View>

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252827",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    paddingVertical: 30
  },
  link: {
    color: "white",
  },
  title: {
    fontSize: "20",
    color: "white",
    paddingVertical: 50
  }
});
