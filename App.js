import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import MashButton from "./button/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Camera from "./button/Camera";
import Scanner from "./scanFunction/scanner";

const Stack = createNativeStackNavigator();
export default function App() {
  function ScreenA({ navigation }) {
    const onPressHandler = () => {
      navigation.navigate("Camera");
    };
    const onPressHandlerr = () => {
      navigation.navigate("Scanner");
    };
    return (
      <View style={styles.body}>
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#dddddd" : "#00ff00" },
            styles.button,
          ]}
        >
          <Text>App</Text>
        </Pressable>
        <Pressable
          onPress={onPressHandlerr}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#dddddd" : "#00ff00" },
            styles.button,
          ]}
        >
          <Text>App</Text>
        </Pressable>
      </View>
    );
  }

  const [submitted, SetSubmitted] = useState(false);
  const OnPressHandler = () => {
    SetSubmitted(!submitted);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  body: {
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },

  button: {
    width: 150,
    height: 50,
    alignItems: "center",
  },
});
