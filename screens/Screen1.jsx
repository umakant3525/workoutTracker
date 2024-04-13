import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Btn from "../components/s1/Btn";

const Screen1 = () => {
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    navigation.navigate(screenName); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => handlePress('Screen3')}>
        <Text style={styles.linkText}>Skip</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require("../assets/img/s1.png")} />
      <Text style={styles.title}>Track Your Goal</Text>
      <Text style={styles.subtitle}>
        Don’t worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals
      </Text>
      <Btn handlePress={() => handlePress('Screen2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  link: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.5,
    textAlign: "left",
    color: "#9FB2FF",
    textDecorationLine: "underline",
  },
  image: {
    width: 282,
    height: 282,
    marginTop: 150,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24.38,
    color: "black",
    marginTop: 40,
    marginLeft: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19.5,
    textAlign: "left",
    color: "#787878",
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16
  },
});

export default Screen1;
