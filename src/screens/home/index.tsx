import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à HomeScreen!</Text>
    </View>
  );
};
