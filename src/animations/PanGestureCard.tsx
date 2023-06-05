import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export const PanGestureCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Animated card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 100,
    width: 300,
    backgroundColor: 'green',
  },
});
