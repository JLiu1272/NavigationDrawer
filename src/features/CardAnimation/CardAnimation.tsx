import * as React from 'react';
import {range} from 'lodash';
import {View} from 'react-native';
import {Card, Cards} from '../../components/Card';

export const CardAnimation = function CardAnimation() {
  return (
    <View>
      {range(3).map((idx: Cards) => (
        <Card key={`card-${idx}`} card={idx} />
      ))}
    </View>
  );
};
