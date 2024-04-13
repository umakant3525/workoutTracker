// Btn.js
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Btn = ({ handlePress }) => {
  return (
    <View style={styles.bottomRight}>
      <TouchableOpacity style={styles.btnBorder} onPress={handlePress}>
        <LinearGradient
          colors={['#DEE5FF', '#809AFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.innercircle}
        >
          <Ionicons name="chevron-forward" size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomRight: {
    position: 'absolute',
    bottom: 30,
    right: 25,
  },
  btnBorder: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#89A1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innercircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Btn;
