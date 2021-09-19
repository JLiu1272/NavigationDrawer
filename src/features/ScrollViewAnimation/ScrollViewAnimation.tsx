import React, {useRef} from 'react';
import {Animated, View} from 'react-native';

export const ScrollViewAnimation = () => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const translation = scrolling.interpolate({
    inputRange: [100, 130],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });

  const opacity = scrolling.interpolate({
    inputRange: [100, 130],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          opacity,
          transform: [{translateY: translation}],
        }}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{flex: 1}}>
        <View style={{flex: 1, height: 1000}} />
      </Animated.ScrollView>
    </>
  );
};
