import React from 'react';
import {StyleSheet, View} from 'react-native';
import {range} from 'lodash';
import {Heart} from './Heart';

export const Rating = () => {
  return (
    <View style={styles.container}>
      {range(0, 4).map(idx => {
        return (
          <View key={idx} style={styles.heartWrapper}>
            <Heart key={idx} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  heartWrapper: {
    padding: 10,
  },
});
