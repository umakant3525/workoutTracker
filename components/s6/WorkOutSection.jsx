import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import SwitchToggle from 'react-native-switch-toggle';

const WorkOutSection = ({ workoutData, switchStates, toggleSwitch }) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.textLeft}>Upcoming Workout</Text>
        <Text style={styles.textRight}>See More</Text>
      </View>

      {workoutData.map((workout, index) => (
        <View style={styles.workoutSection} key={workout.id}>
          <View style={styles.circularImageContainer}>
            <Image style={styles.circularImage} source={workout.imageSource} />
          </View>
          <View style={styles.textColumn}>
            <Text style={styles.workoutText}>{workout.workoutName}</Text>
            <Text style={styles.timeText}>{workout.time}</Text>
          </View>
          <View style={styles.switchContainer}>
            <SwitchToggle
              containerStyle={styles.switchToggleContainer}
              circleStyle={styles.switchToggleCircle}
              switchOn={switchStates[index]}
              onPress={() => toggleSwitch(index)}
              backgroundColorOn="#8099FF"
              backgroundColorOff="#CCCCCC"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40, // Reduce margin
    paddingHorizontal: 20,
  },
  textLeft: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2B2B',
  },
  textRight: {
    fontSize: 12,
    fontWeight: '500',
    color: '#7F7F7F',
  },
  workoutSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  circularImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textColumn: {
    flex: 1,
    marginLeft: 10,
  },
  workoutText: {
    fontSize: 16,
    fontWeight: '400',
  },
  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  switchContainer: {
    marginLeft: 10,
  },
  switchToggleContainer: {
    width: 40,
    height: 20,
    borderRadius: 12,
    padding: 0,
    backgroundColor: '#8099FF',
  },
  switchToggleCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 'auto',
  },
});

export default WorkOutSection;
