import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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

const GraphSection = () => {
  const maxCalories = Math.max(...barGraphData.map(data => data.calories));
  
  return (
    <ScrollView horizontal={true}>
      <View style={[styles.barGraphContainer, { height: maxCalories / 2 }]}>
        <View style={styles.barGraph}>
          {barGraphData.map((data, index) => (
            <View key={index} style={styles.bar}>
              <View style={[styles.barFill, { height: data.calories / 2 }]} />
              <Text style={styles.barLabel}>{data.time}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  barGraphContainer: {
    marginTop: 5,
    marginBottom: 80,
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
    borderTopWidth: 1,
    borderTopColor: '#8099FF',
    borderStyle: 'dotted',
    fontSize: 12,
    fontWeight: '500',
    color: '#2C2B2B',
    paddingHorizontal : 3,
  },
});

export default GraphSection;
