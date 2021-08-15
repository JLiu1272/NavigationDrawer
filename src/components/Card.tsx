import React from 'react';
import {Dimensions, Image, StyleSheet, ImageStyle} from 'react-native';
import {DangerouslySetStyle} from '../types/SharedProps';

const {width} = Dimensions.get('window');
const ratio = 228 / 362;
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * ratio;

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
} & DangerouslySetStyle<ImageStyle>;

export const Card = ({card, ...props}: CardProps) => {
  return (
    <Image
      style={[styles.card, props.dangerouslySetStyle]}
      source={assets[card]}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});
