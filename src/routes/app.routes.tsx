import { createNativeStackNavigator } from "@react-navigation/native-stack"; // native stack is a browse mode
import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { NewGroup } from "@screens/NewGroup";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen // this will be the first route loaded - we can define our first route with the property 'initialRouteName'
        name="groups"
        component={Groups}
      />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
