import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Finally from "../components/Finally";
import {RootStackParamList} from "../types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Finally} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;