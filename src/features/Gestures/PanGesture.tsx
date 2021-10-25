import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

export const PanGesture = () => {
  const translateX = new Animated.Value(15);
  const translateY = new Animated.Value(15);
  const _lastOffset = {x: 0, y: 0};

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const _onHandlerStateChange = (event: {
    nativeEvent: {oldState: number; translationX: number; translationY: number};
  }) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      _lastOffset.x += event.nativeEvent.translationX;
      _lastOffset.y += event.nativeEvent.translationY;
      translateX.setOffset(_lastOffset.x);
      translateX.setValue(0);
      translateY.setOffset(_lastOffset.y);
      translateY.setValue(0);
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onPanGestureEvent}
      onHandlerStateChange={_onHandlerStateChange}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              {
                translateX,
              },
              {
                translateY,
              },
            ],
          },
        ]}
      />
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    backgroundColor: '#28b5b5',
  },
});
