import { NavigationContainer } from "@react-navigation/native"; // COR navigation - NavigationContainer is our context navigation
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    // this context (NavigationContainer) have the navigation - routes now have navigation access in their properties
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
