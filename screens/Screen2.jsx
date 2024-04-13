import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Btn from "../components/s1/Btn";

const Screen2 = () => {
  const navigation = useNavigation();

  const handleSkipPress = () => {
    navigation.navigate('Screen3', {
      transition: 'smartAnimate',
      spring: { mass: 1, stiffness: 100, damping: 15 }
    }); 
  };

  const handleBtnPress = () => {
    navigation.navigate('Screen3', {
      transition: 'smartAnimate',
      timingFunction: 'ease-out',
      duration: 917
    }); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={handleSkipPress}>
        <Text style={styles.linkText}>Skip</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require("../assets/img/s2.png")} />
      <Text style={styles.title}>Get Burn</Text>
      <Text style={styles.subtitle}>
        Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
      </Text>
      <Btn handlePress={handleBtnPress} />
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
    width: 352,
    height: 234.61,
    marginTop: 200,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24.38,
    color: "black",
    marginTop: 60,
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
    marginRight: 16,
  },
});

export default Screen2;
