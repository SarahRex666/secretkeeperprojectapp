import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import Profile from "./Profile";
import Message from "./Message";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
        {(props) => <Home {...props} user={user} setUser={setUser} />}
          </Stack.Screen>
        <Stack.Screen name="Login" >
           {(props) => <Login {...props} user={user} setUser={setUser} />}
          </Stack.Screen>
        <Stack.Screen name="Logout">
                     {(props) => <Logout {...props} user={user} setUser={setUser} />}
          </Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" >
                      {(props) => <Profile {...props} user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Message">
            {(props) => <Message {...props} user={user} setUser={setUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
