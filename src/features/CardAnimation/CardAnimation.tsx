import * as React from 'react';
import {range} from 'lodash';
import {StyleSheet, View} from 'react-native';
import {Card, Cards} from '../../components/Card';

export const CardAnimation = function CardAnimation() {
  return (
    <View style={styles.container}>
      {range(3).map((idx: Cards) => (
        <Card
          dangerouslySetStyle={styles.card}
          key={`card-${idx}`}
          card={idx}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
  },
});
