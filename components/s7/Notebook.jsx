import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Notebook = () => {
  const renderTimeSlots = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      let hour = i < 10 ? '0' + i : i;
      times.push(
        <Text key={i} style={styles.time}>
          {hour}:00 {i < 12 ? 'AM' : 'PM'}
        </Text>
      );
    }
    return times;
  };

  return (
    <View style={styles.container}>
      <View style={styles.notebook}>
        {renderTimeSlots()}
      </View>
    </View>
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
