import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { RootStackParamList } from "../../../../../App";

const sections: Array<keyof RootStackParamList> = ["Task", "Market"];

export const GridOptions = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (section: keyof RootStackParamList) => {
    navigation.navigate(section);
  };

  return (
    <View style={styles.grid}>
      {sections.map((section) => (
        <TouchableOpacity
          key={section}
          style={styles.button}
          onPress={() => handlePress(section)}
        >
          <Text style={styles.buttonText}>{section}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
