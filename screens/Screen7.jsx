import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Date from "../components/s7/Date";
import Notebook from "../components/s7/Notebook";
import BottomTabs from "../components/BottomTabs";

const workoutData = [
  {
    id: 1,
    imageSource: require("../assets/img/s61.png"),
    workoutName: "Full Body Workout",
    time: "Today 3pm",
  },
  {
    id: 2,
    imageSource: require("../assets/img/s62.png"),
    workoutName: "Upper Body Workout",
    time: "4 Feb, 3:30 pm",
  },
];

const Screen7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.box}>
          <Ionicons name="chevron-back" size={20} color="black" />
        </View>
        <Text style={styles.title}>Workout Schedule</Text>
      </View>
      <Date />
      <ScrollView style={styles.scrollContainer}>
        <Notebook />
      </ScrollView>

      <BottomTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 80,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: "#F1F1F1",
    marginRight: 10,
    borderRadius: 3,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 5,
  },
});

export default Screen7;
