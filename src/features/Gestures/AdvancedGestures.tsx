import React, {PureComponent} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {PinchGestureHandler} from 'react-native-gesture-handler';

const tag = '[GESTURE]';

export class AdvancedGestures extends PureComponent {
  //   handleGesture = (evt: {nativeEvent: any}) => {
  //     let {nativeEvent} = evt;
  //     console.log(nativeEvent);
  //   };
  translateX = new Animated.Value(0);
  translateY = new Animated.Value(0);
  scale = new Animated.Value(1);

  handleGesture = Animated.event(
    [
      {
        nativeEvent: {
          scale: this.scale,
        },
      },
    ],
    {useNativeDriver: true},
  );
  _onGestureStateChange = (e: {nativeEvent: {scale: number}}) => {
    console.log(tag, e.nativeEvent);
    this.scale.setValue(e.nativeEvent.scale);
  };

  render() {
    let circleTransformStyle = {
      transform: [{translateX: this.translateX}, {translateY: this.translateY}],
    };
    let scaleTransformStyle = {
      transform: [
        {perspective: 200},
        {
          scale: this.scale,
        },
      ],
    };

    return (
      <View style={styles.container}>
        <PinchGestureHandler
          onGestureEvent={this.handleGesture}
          onHandlerStateChange={this._onGestureStateChange}>
          <Animated.View style={[styles.circle, scaleTransformStyle]} />
        </PinchGestureHandler>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    top: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: '#c00000',
    borderRadius: 100,
  },
});
