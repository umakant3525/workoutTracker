import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const Screen3 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={handleCheckboxToggle}
        >
          <View
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
          ></View>
          <Text style={styles.checkboxText}>
            By proceeding, I agree to all{" "}
            <Text style={{ color: "#93A9FF", textDecorationLine: "underline" }}>
              T&C
            </Text>{" "}
            and{" "}
            <Text style={{ color: "#93A9FF", textDecorationLine: "underline" }}>
              Privacy Policy
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnContainer} onPress={() => {}}>
        <Text style={styles.btnText}>Create an Account</Text>
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

      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={{ color: "#93A9FF", textDecorationLine: "underline" }}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 80,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#7F7F7F",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#EB1754",
  },
  checkboxText: {
    fontSize: 12,
    flex: 1,
    color: "#2C2B2B",
  },
  btnContainer: {
    height: 50,
    borderRadius: 12,
    backgroundColor: "#7B91FF",
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#2C2B2B',
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 15,
    color: '#2C2B2B',
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
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
