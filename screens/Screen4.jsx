import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import { Ionicons } from '@expo/vector-icons'; 

const Screen4 = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!showPassword} 
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#7F7F7F" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Screen5')}>
        <LinearGradient
          colors={['#95BEFF','#7B91FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.btnContainer}
        >
          <Text style={styles.btnText}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <View style={styles.horizontalLine} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.horizontalLine} />
      </View>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={[styles.socialIconBox, { marginRight: 20 }]}>
          <Image
            style={styles.iconimg}
            source={{
              uri: "https://tse2.mm.bing.net/th?id=OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa&pid=Api&P=0&h=180",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconBox}>
          <Image
            style={styles.iconimg}
            source={{
              uri: "https://tse1.mm.bing.net/th?id=OIP.53b08CedN8D1qIPKNpEczAHaHt&pid=Api&P=0&h=180",
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
        <Text style={styles.loginText}>
          Don’t have an account yet?{" "}
          <Text style={{ color: "#93A9FF", textDecorationLine: "underline" }}>
            Create an account
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 70, 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "left",
    marginLeft: 16,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    backgroundColor: "#F1F1F1",
    color: "#000",
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    backgroundColor: "#F1F1F1",
    color: "#000",
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  forgotPasswordText: {
    color: "#7F7F7F",
    textDecorationLine: "underline",
    marginLeft: 10,
    marginBottom: 200
  },
  btnContainer: {
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#2C2B2B",
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 15,
    color: "#2C2B2B",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  socialIconBox: {
    height: 44,
    width: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  iconimg: {
    height: 18,
    width: 18,
  },
  loginText: {
    textAlign: "center",
  },
});
