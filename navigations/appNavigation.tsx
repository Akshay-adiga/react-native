import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/homeScreen';
import { DetailScreen } from '../screens/detailsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: 'Posts',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }} />
                <Stack.Screen
                    name="Details"
                    component={DetailScreen}
                    options={{
                        title: 'Details',
                        headerStyle: {
                            backgroundColor: 'grey'
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation