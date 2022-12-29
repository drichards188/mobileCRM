import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Finally from "../components/Finally";
import {RootStackParamList} from "../types/types";
import DynamicStyles from "../components/DynamicStyles";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
                <Stack.Navigator
                initialRouteName='Home'>
                    <Stack.Screen name="Home" component={Finally}/>
                    <Stack.Screen name='Styles' component={DynamicStyles}/>
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;