import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
  userName: string;
}

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, Renan</Text>
    </View>
  );
};
