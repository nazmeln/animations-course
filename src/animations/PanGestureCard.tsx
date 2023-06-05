import React from 'react';

import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';

const CARD_HEIGHT = 200;
const CARD_WIDTH = 300;

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Animated card</Text>
    </View>
  );
};

export const PanGestureCard = () => {
  const {width, height} = useWindowDimensions();

  const bondX = width - CARD_WIDTH;
  const bondY = height - CARD_HEIGHT;

  // creating 2 animations values
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      //needed in order to keep the card in the same position
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },

    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, bondX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, bondY);
    },

    onEnd: (event, ctx) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, bondX],
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, bondY],
      });
    },
  });

  // creating animated style

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEventHandler}>
        <Animated.View style={animatedStyle}>
          <Card />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'green',
  },
  cardTitle: {
    color: 'white',
  },
});
