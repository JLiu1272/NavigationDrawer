import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

export const SimpleAnimation = function SimpleAnimation() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start();
  }, [translation]);

  return (
    <Animated.View
      style={[
        styles.box,
        {
          transform: [{translateX: translation}],
        },
      ]}
    />
  );
};
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
});
