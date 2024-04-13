import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Box3 = () => {
  return (
    <LinearGradient
      colors={['#F1F1F1', '#F1F1F1']} // Using the provided gray color for gradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.text}>Lowerbody Workout, 2pm</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 30,
    top: -700,
    left: 100,
    borderRadius: 20,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000', // Set text color to black
  },
});

export default Box3;
