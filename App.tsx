/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PanGestureCard} from './src/animations';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Examples} from './src/routes/Examples';
import {ROUTES} from './src/routes/routes';
import {StackNavigation} from './src/routes/types';

const Stack = createStackNavigator<StackNavigation>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.Examples} component={Examples} />
        <Stack.Screen name={ROUTES.GestureCard} component={PanGestureCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
