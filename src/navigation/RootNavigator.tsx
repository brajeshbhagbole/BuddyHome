import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import OnboardingRole from "../screens/OnboardingRole";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import UserHomeScreen from "../screens/user/UserHomeScreen";
import UserBottomTabs from "./UserBottomTabs";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="OnboardingRole" component={OnboardingRole} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="UserMain" component={UserBottomTabs} />
            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default RootNavigator;