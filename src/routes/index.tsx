import { NavigationContainer } from "@react-navigation/native"; // COR navigation - NavigationContainer is our context navigation
import { AppRoutes } from "./app.routes";

export function Routes() {
  return ( // this context have the navigation - routes now have navigation access in their properties
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
