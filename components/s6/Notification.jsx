import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Notification = () => {
  return (
    <LinearGradient
      style={styles.warningMessage}
      colors={['rgba(129, 157, 255, 0.28)', 'rgba(16, 16, 16, 0)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Ionicons name="warning-outline" size={24} color="#7E96FF" />
      <Text style={styles.message}>
        You've burned fewer calories than yesterday. Time to get moving!
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  warningMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1.02,
    borderColor: '#4545450A',
    paddingHorizontal: 3,
  },
  message: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    color: '#2C2B2B',
  },
});

export default Notification;
