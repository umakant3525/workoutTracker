import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SwitchToggle from 'react-native-switch-toggle';

const workoutData = [
  {
    id: 1,
    imageSource: require('../assets/img/s61.png'),
    workoutName: 'Full Body Workout',
    time: 'Today 3pm',
  },
  {
    id: 2,
    imageSource: require('../assets/img/s62.png'),
    workoutName: 'Upper Body Workout',
    time: '4 Feb, 3:30 pm',
  },
];

const barGraphData = [
  { time: '1:00pm', calories: 100 },
  { time: '2:00pm', calories: 150 },
  { time: '3:00pm', calories: 120 },
  { time: '4:00pm', calories: 200 },
  { time: '5:00pm', calories: 180 },
  { time: '6:00pm', calories: 220 },
  { time: '7:00pm', calories: 150 },
  { time: '8:00pm', calories: 180 },
  { time: '9:00pm', calories: 120 },
  { time: '10:00pm', calories: 200 },
  { time: '11:00pm', calories: 220 },
  { time: '12:00am', calories: 150 },
  { time: '1:00am', calories: 180 },
  { time: '2:00am', calories: 120 },
  { time: '3:00am', calories: 200 },
  { time: '4:00am', calories: 220 },
  { time: '5:00am', calories: 150 },
  { time: '6:00am', calories: 180 },
  { time: '7:00am', calories: 120 },
  { time: '8:00am', calories: 200 },
  { time: '9:00am', calories: 220 },
  { time: '10:00am', calories: 150 },
  { time: '11:00am', calories: 180 },
  { time: '12:00pm', calories: 120 },
];

const Screen6 = () => {
  const [switchStates, setSwitchStates] = useState(workoutData.map(() => true));

  const toggleSwitch = (index) => {
    const updatedSwitchStates = [...switchStates];
    updatedSwitchStates[index] = !updatedSwitchStates[index];
    setSwitchStates(updatedSwitchStates);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.box}>
          <Ionicons name="chevron-back" size={20} color="black" />
        </View>
        <Text style={styles.title}>Workout Tracker</Text>
      </View>


      <ScrollView horizontal={true}>
        <View style={styles.barGraphContainer}>
          <View style={styles.barGraph}>
            {barGraphData.map((data, index) => (
              <View key={index} style={styles.bar}>
                <View style={[styles.barFill, { height: (data.calories / 2) }]} />
                <Text style={styles.barLabel}>{data.time}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
<ScrollView>

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
            source={require('../assets/img/s63.png')}
            style={styles.posterImage}
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: '#F1F1F1',
    marginRight: 10,
    borderRadius: 3,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  barGraphContainer: {
    marginTop: 5,
    marginBottom : 5,
    // backgroundColor: 'red',
  },
  barGraph: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  bar: {
    flex: 1,
    alignItems: 'center',
  },
  barFill: {
    width: 5,
    backgroundColor: '#8099FF',
    marginBottom: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  barLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2C2B2B',
  },
  warningMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1.02,
    borderColor: '#4545450A',
    paddingHorizontal: 3,
    marginTop: 5, // Reduce margin
  },
  message: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    color: '#2C2B2B',
  },
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
    width: 40,
    height: 40,
    borderRadius: 20,
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

export default Screen6;
