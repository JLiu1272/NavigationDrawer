import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

export const SimpleAnimation = function SimpleAnimation() {
  const springTranslate = useRef(new Animated.Value(0)).current;
  const timingTranslate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(timingTranslate, {
      toValue: 100,
      useNativeDriver: true,
    }).start();

    Animated.spring(springTranslate, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  }, [springTranslate, timingTranslate]);

  return (
    <View>
      <Animated.View
        style={[
          styles.boxTiming,
          {
            transform: [{translateX: timingTranslate}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.boxSpring,
          {
            transform: [{translateX: springTranslate}],
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  boxSpring: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
  boxTiming: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
