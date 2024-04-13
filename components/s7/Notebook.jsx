import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';

const Notebook = () => {
  const renderTimeSlots = () => {
    const times = [];
    for (let i = 6; i < 30; i++) {
      let hour = i < 12 ? (i === 0 ? 12 : i) : i - 12;
      let period = i < 12 ? 'AM' : 'PM';
      times.push(
        <Text key={i} style={styles.time}>
          {hour}:00 {period}
        </Text>
      );
    }
    return times;
  };

  return (
    <>
     
      <View style={styles.container}>
        <View style={styles.notebook}>
          {renderTimeSlots()}
        </View>
      </View>
      <Box1/>
      <Box2/>
      <Box3/>
    </>
  );
};

export default Notebook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notebook: {
    width: '100%', // Adjust as needed
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 40,
    borderColor: '#7F7F7F',
    borderBottomWidth: 0.5,
    color: '#2C2B2B',
    paddingLeft: 10, // Add some left padding for better appearance
  },
});
