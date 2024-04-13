import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SwitchToggle from 'react-native-switch-toggle';
import BottomTabs from '../components/BottomTabs';
import Notification from '../components/s6/Notification';
import GraphSection from '../components/s6/GraphSection';
import WorkOutSection from '../components/s6/WorkOutSection';
import Poster from '../components/s6/Poster';

const workoutData = [
  {
    id: 1,
    imageSource: require('../assets/img/s61.png'),
    workoutName: 'Full Body Workout',
    time: 'Today 3pm',
  },
  {
    id: 2,
    imageSource: require('../assets/img/s61.png'),
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

      {/* After some time i will use library also */}
      <GraphSection />

      <ScrollView>
        <Notification />

        <WorkOutSection workoutData={workoutData} switchStates={switchStates} toggleSwitch={toggleSwitch} />
        
        <Poster />
      </ScrollView>


      <BottomTabs />
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
});

export default Screen6;
