import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

const tag = '[GESTURE]';

export const Heart = () => {
  const translate = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const handleGesture = Animated.event(
    [
      {
        nativeEvent: {
          x: translate.x,
          y: translate.y,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const capX = () => {
    return translate.x;
  };

  const animateRating = {
    transform: [
      {
        translateX: translate.x,
      },
    ],
  };

  const _onGestureStateChange = (e: {nativeEvent: any}) => {
    console.log(tag, e.nativeEvent);
  };

  return (
    <View style={styles.outer_container}>
      <View style={[styles.container, styles.bottom]} />
      <PanGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={_onGestureStateChange}>
        <Animated.View style={[styles.top, animateRating]} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  outer_container: {
    position: 'relative',
    width: 80,
    height: 80,
    backgroundColor: 'pink',
  },
  bottom: {
    zIndex: 1,
  },
  top: {
    zIndex: 2,
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  container: {
    width: 50,
    height: 50,
    borderWidth: 5,
    position: 'absolute',
    borderColor: 'black',
    borderRadius: 40,
  },
});
