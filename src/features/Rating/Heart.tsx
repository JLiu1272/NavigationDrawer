import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {StyleSheet} from 'react-native';

export const Heart = () => {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [backgroundColor]);

  useEffect(() => {
    fadeIn();
  }, [fadeIn]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor.interpolate({
            inputRange: [0, 1],
            outputRange: ['transparent', 'blue'],
          }),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 40,
  },
});
