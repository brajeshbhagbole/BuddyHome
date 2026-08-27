import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import OnboardingRole from "../screens/OnboardingRole";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="OnboardingRole" component={OnboardingRole} />
            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default RootNavigator;