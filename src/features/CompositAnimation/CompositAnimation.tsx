import React, {useRef, useEffect, useCallback, useState} from 'react';
import {Animated, Button, View, Text} from 'react-native';

export const CompositAnimation = () => {
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const [compositType, setCompositType] = useState('sequence');

  const sequenceAnimation = useCallback(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: 60,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: 60,
        useNativeDriver: true,
      }),
      Animated.spring(translation.x, {
        toValue: -60,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: -60,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translation]);

  const parallelAnimation = useCallback(() => {
    Animated.parallel([
      Animated.spring(translation.x, {
        toValue: 60,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: 60,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translation]);

  useEffect(() => {
    if (compositType === 'parallel') {
      console.log('Parallel');
      parallelAnimation();
    }

    if (compositType === 'sequence') {
      console.log('Sequencing');
      sequenceAnimation();
    }
  }, [sequenceAnimation, parallelAnimation, compositType]);

  return (
    <View>
      <Button
        title="Toggle Composit Type"
        onPress={() =>
          setCompositType(compositType === 'parallel' ? 'sequence' : 'parallel')
        }
      />
      <Text>{compositType}</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          transform: [{translateX: translation.x}, {translateY: translation.y}],
        }}
      />
    </View>
  );
};
