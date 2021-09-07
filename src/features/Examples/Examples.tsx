import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../../components/Routes';
import {StyleSheet, Button, SafeAreaView, ScrollView, View} from 'react-native';

const examples = [
  {
    screen: 'CardAnimation',
    title: 'CardAnimation',
  },
  {
    screen: 'Home',
    title: 'Home',
  },
  {
    screen: 'SimpleAnimation',
    title: 'SimpleAnimation',
  },
];

export const Examples = function Examples() {
  const {navigate} = useNavigation<StackNavigationProp<Routes, 'Examples'>>();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {examples.map(example => (
          <View style={styles.btn} key={example.title}>
            <Button
              title={example.title}
              onPress={() => navigate(example.title as keyof Routes)}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    margin: 10,
  },
  btn: {
    margin: 5,
  },
});
