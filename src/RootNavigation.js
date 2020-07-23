import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './container/FirstPage';
import SplashScreen from './container/SplashScreen';
import SecondPage from './container/SecondPage';
import ThirdPage from './container/ThirdPage';
import GameSummary from './container/GameSummary';
import GameHistory from './container/GameHistory';
const Stack = createStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SplashScreen"
            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FirstPage"
                    component={FirstPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SecondPage"
                    component={SecondPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ThirdPage"
                    component={ThirdPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GameSummary"
                    component={GameSummary}
                    options={{ headerShown: false,headerTitle:"Game Summary"}}
                />
                <Stack.Screen
                    name="GameHistory"
                    component={GameHistory}
                    options={{headerTitle:"Game History"}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;