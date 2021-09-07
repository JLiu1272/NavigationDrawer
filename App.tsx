/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './src/components/Routes';
import {Examples} from './src/features/Examples/Examples';
import {CardAnimation} from './src/features/CardAnimation';
import {SimpleAnimation} from './src/features/SimpleAnimation';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Home = function Home() {
  return (
    <View>
      <Text>Jennifer's Home Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator<Routes>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Examples"
    screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
      },
    }}>
    <Stack.Screen
      name="Examples"
      component={Examples}
      options={{
        title: 'Home',
      }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
      }}
    />
    <Stack.Screen
      name="CardAnimation"
      component={CardAnimation}
      options={{
        title: 'Card Animation',
      }}
    />
    <Stack.Screen
      name="SimpleAnimation"
      component={SimpleAnimation}
      options={{
        title: 'Card SimpleAnimation',
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
