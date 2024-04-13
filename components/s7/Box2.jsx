import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Box2 = () => {
  return (
    <LinearGradient
      colors={['#D3A4F4', '#E9B1E0']}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.text}>Upperbody Workout, 9am</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 30,
    top: -875,
    left : 100,
    borderRadius: 20,
    opacity: 1, // Setting opacity to 1 makes it fully opaque
    justifyContent: 'center', // Align text vertically center
    alignItems: 'center', // Align text horizontally center
  },
  text: {
    color: '#FFFFFF', // Set text color to white
  },
});

export default Box2;
