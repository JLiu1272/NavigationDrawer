import React, {useRef, useEffect, useCallback, useState} from 'react';
import {Animated, Button, View, Text, StyleSheet} from 'react-native';

const compositTypes = ['sequence', 'parallel', 'mix'];

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

  const mixAnimation = useCallback(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: 100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(translation.x, {
          toValue: 20,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: -20,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [translation]);

  useEffect(() => {
    switch (compositType) {
      default:
      case 'parallel':
        parallelAnimation();
        break;
      case 'sequence':
        sequenceAnimation();
        break;
      case 'mix':
        mixAnimation();
        break;
    }
  }, [sequenceAnimation, parallelAnimation, mixAnimation, compositType]);

  return (
    <View>
      {compositTypes.map(type => (
        <View style={{padding: 5}}>
          <Button
            title={type}
            key={type}
            onPress={() => setCompositType(type)}
          />
        </View>
      ))}
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
