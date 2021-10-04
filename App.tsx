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
import {CompositAnimation} from './src/features/CompositAnimation';
import {Interpolation} from './src/features/Interpolation';
import {ScrollViewAnimation} from './src/features/ScrollViewAnimation';
import {AdvancedGestures} from './src/features/Gestures/AdvancedGestures';
import {Gestures} from './src/features/Gestures';
import {Rating} from './src/features/Rating';
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
    <Stack.Screen
      name="CompositAnimation"
      component={CompositAnimation}
      options={{
        title: 'Composit Animation Example',
      }}
    />
    <Stack.Screen
      name="Interpolation"
      component={Interpolation}
      options={{
        title: 'Interpolation Animation Example',
      }}
    />
    <Stack.Screen
      name="ScrollViewAnimation"
      component={ScrollViewAnimation}
      options={{
        title: 'ScrollView Animation Example',
      }}
    />
    <Stack.Screen
      name="Gestures"
      component={Gestures}
      options={{
        title: 'Gestures Example',
      }}
    />
    <Stack.Screen
      name="AdvancedGestures"
      component={AdvancedGestures}
      options={{
        title: 'AdvancedGestures Example',
      }}
    />
    <Stack.Screen
      name="Rating"
      component={Rating}
      options={{
        title: 'Rating Example',
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
