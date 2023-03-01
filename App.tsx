import { ActivityIndicator } from "react-native" // este é um componente de loading
import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }); // carregamento de fontes é assíncrono e vamos ter que lidar com isso



  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
