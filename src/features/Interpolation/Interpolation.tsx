import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export const Interpolation = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [translation]);

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        opacity: translation.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
        }),
        backgroundColor: 'orange',
        transform: [{translateX: translation}],
      }}
    />
  );
};
