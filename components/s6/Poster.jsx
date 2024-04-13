import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Poster = () => {
  return (
    <View>
      <Text style={styles.wanttext}>What Do You Want to Train</Text>
      <View style={styles.postersection}>
        <View style={styles.posterColumn}>
          <Text style={styles.posterText}>Full body workout</Text>
          <Text style={styles.posterText}>Arms</Text>
          <Text style={styles.posterText}>Chest</Text>
          <Text style={styles.posterText}>Legs</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/img/s63.png')}
            style={styles.posterImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wanttext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2B2B',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  postersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#8CB1FF99',
    marginTop: 20,
  },
  posterColumn: {
    flexDirection: 'column',
  },
  posterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C2B2B',
    marginBottom: 5,
  },
  posterImage: {
    width: 100,
    height: 100,
  },
});

export default Poster;
