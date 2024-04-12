import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Screen1 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Screen2'); // Assuming 'LanguageTranslator' is the screen to navigate to
  };

  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.link} onPress={handlePress} >
        <Text style={styles.linkText}>Skip</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require("../assets/img/s1.png")} />
      <Text style={styles.title}>Track Your Goal</Text>
      <Text style={styles.subtitle}>
        Don’t worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals
      </Text>

      <View style={styles.bottomRight}>
        <TouchableOpacity style={styles.btnBorder} onPress={handlePress} target="_blank">
          <View style={styles.innercircle}>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
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
    marginTop: 132,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24.38,
    color: "black",
    marginTop: 20,
    marginLeft: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.5,
    textAlign: "left",
    color: "#787878",
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16
  },
  bottomRight: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  btnBorder: {
    height: 60,
    width: 60,
    borderRadius: 30, 
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#89A1FF",
    justifyContent: "center",
    alignItems: "center",
  },
  innercircle: {
    backgroundColor: "#89A1FF", // Changed from red to match border color
    width: 50,
    height: 50,
    borderRadius: 50, 
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Screen1;
