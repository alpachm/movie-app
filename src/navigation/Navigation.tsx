import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import NavigationHeader from "../components/navigation/NavigationHeader";
import { getHeaderTitle } from "@react-navigation/elements";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};
const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  const config: TransitionSpec = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 1000,
      mass: 1,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ options, route }) => {
          const title = getHeaderTitle(options, route.name);
          return <NavigationHeader title={title} />;
        },
        headerTitle: "Películas",
        transitionSpec: {
          open: config,
          close: config,
        },
        animationEnabled: true,
        animationTypeForReplace: "push",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
