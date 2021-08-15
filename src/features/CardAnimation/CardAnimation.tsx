import React, {useState} from 'react';
import {range} from 'lodash';
import {Button, StyleSheet, View} from 'react-native';
import {Card, Cards} from '../../components/Card';

export const CardAnimation = function CardAnimation() {
  const [toggled, setToggle] = useState(false);

  return (
    <View>
      <View
        style={[
          {
            transform: [{translateY: 150}],
          },
        ]}>
        {range(3).map((idx: Cards) => (
          <Card
            toggled={toggled}
            key={`card-${idx}`}
            dangerouslySetStyle={styles.card}
            card={idx}
          />
        ))}
      </View>
      <View style={styles.btnContainer}>
        <Button
          title={toggled ? 'Reset' : 'Start'}
          onPress={() => setToggle(prev => !prev)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    position: 'relative',
    bottom: 0,
  },
  cardContainer: {
    position: 'relative',
    top: '50%',
  },
  card: {
    position: 'absolute',
  },
});
