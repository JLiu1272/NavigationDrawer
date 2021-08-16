import React, {useRef} from 'react';
import {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  ImageStyle,
  Animated,
} from 'react-native';
import {DangerouslySetStyle} from '../types/SharedProps';

const {width} = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

export const assets = [
  require('./assets/cards/card1.png'),
  require('./assets/cards/card2.png'),
  require('./assets/cards/card3.png'),
  require('./assets/cards/card4.png'),
  require('./assets/cards/card5.png'),
  require('./assets/cards/card6.png'),
];

export enum Cards {
  Card1 = 0,
  Card2 = 2,
  Card3 = 3,
  Card4 = 4,
  Card5 = 5,
  Card6 = 6,
}

type CardProps = {
  card: Cards;
  toggled: boolean;
} & DangerouslySetStyle<ImageStyle>;

const alpha = Math.PI / 6;

export const Card = ({card, toggled, ...props}: CardProps) => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (toggled) {
      console.log(toggled);
      Animated.timing(rotation, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(rotation, {
        toValue: 0,
        duration: 6000,
        useNativeDriver: true,
      }).start();
    }
  }, [rotation, toggled]);

  const endDeg = (card - 1) * alpha;

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${endDeg}rad`],
  });

  return (
    <Animated.View
      style={{
        transform: [{rotate: interpolatedRotation}],
      }}>
      <Image
        style={[styles.card, props.dangerouslySetStyle]}
        source={assets[card]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});
