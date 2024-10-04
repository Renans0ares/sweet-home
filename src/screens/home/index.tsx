import React from "react";
import { View, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { GridOptions } from "./components/GridOptions";
import { FooterMenu } from "./components/FooterMenu";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <GridOptions />
      <FooterMenu />
    </View>
  );
};
