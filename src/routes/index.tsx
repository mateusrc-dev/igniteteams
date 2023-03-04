import { NavigationContainer } from "@react-navigation/native"; // COR navigation - NavigationContainer is our context navigation
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
