import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/login";
import { HomeScreen } from "./src/screens/home";

// Definindo o tipo para as rotas
export type RootStackParamList = {
  Login: undefined; // Não espera parâmetros para Login
  Home: undefined; // Não espera parâmetros para Home
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de loginr
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Se você quiser mostrar o cabeçalho na tela de Home
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
