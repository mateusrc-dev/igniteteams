import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index"; // import our routes

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }); // carregamento de fontes é assíncrono e vamos ter que lidar com isso

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content" // cor dos ícones
        backgroundColor="transparent"
        translucent // para a interface da aplicação começar do topo
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
