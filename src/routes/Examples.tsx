import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ROUTES} from './routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigation} from './types';
import {RectButton} from 'react-native-gesture-handler';

export const examples = [
  {
    screen: 'Transitions',
    title: '🔁 Transitions',
  },
  {
    screen: ROUTES.GestureCard,
    title: '💳 PanGesture',
  },
  {
    screen: 'Animations',
    title: '🐎 Animations',
  },
  {
    screen: 'CircularSlider',
    title: '⭕️ Circular Slider',
  },
  {
    screen: 'Graph',
    title: '📈 Graph Interactions',
  },
  {
    screen: 'DynamicSpring',
    title: '👨‍🔬 Dynamic Spring',
  },
  {
    screen: 'DragToSort',
    title: '📤 Drag To Sort',
  },
  {
    screen: 'Swiping',
    title: '💚 Swiping',
  },
  {
    screen: 'Bezier',
    title: '⤴️ Bézier',
  },
  {
    screen: 'ShapeMorphing',
    title: '☺️ Shape Morphing',
  },
  {
    screen: 'Accordion',
    title: '🗺 Accordion',
  },
] as const;

export const Examples = () => {
  const {navigate} = useNavigation<StackNavigationProp<StackNavigation>>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {examples.map(thumbnail => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigate(thumbnail.screen)}>
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{thumbnail.title}</Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#f2f2f2',
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },
});
