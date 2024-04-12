import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Import both Ionicons and MaterialCommunityIcons from Expo

const Screen5 = () => {
  const [options, setOptions] = useState([
    { label: "Weight Loss", checked: false },
    { label: "Muscle Gain", checked: false },
    { label: "Flexibility and Mobility", checked: false },
    { label: "Weight Loss", checked: false },
    { label: "Muscle Gain", checked: false },
    { label: "Flexibility and Mobility", checked: false }
  ]);

  const toggleCheckbox = (index) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are your goals ? </Text>
      
      <View style={styles.optioncontainer}>
        {options.map((option, index) => (
          <View key={index} style={styles.option}>
            <Text style={styles.optionText}>{option.label}</Text>
            <TouchableOpacity onPress={() => toggleCheckbox(index)}>
              {!option.checked ?  
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#7B91FF" />
                :
                <Ionicons name="checkbox" size={24} color="#7B91FF" />
              }
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.btnContainer} onPress={() => {}}>
        <Text style={styles.btnText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 80, 
  },
  title: {
    fontSize: 20,
    fontWeight: "500", 
    marginBottom: 15,
    textAlign: "center"
  },  
  optioncontainer : {
    marginTop : 30
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    marginBottom: 15,
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: "#F1F1F1",
    color: "#000",
  },
  optionText: {
    fontSize: 16,
    marginRight: 10,
  },
  btnContainer: {
    height: 50,
    borderRadius: 12,
    backgroundColor: "#7B91FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});
