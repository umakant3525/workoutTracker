// Btn.js
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Btn = ({ handlePress }) => {
  return (
    <View style={styles.bottomRight}>
      <TouchableOpacity style={styles.btnBorder} onPress={handlePress}>
        <View style={styles.innercircle}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
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
    backgroundColor: '#89A1FF',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Btn;
