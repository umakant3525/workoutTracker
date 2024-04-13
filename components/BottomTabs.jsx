import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Octicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.bottomTabs}>

<View>
  </View>      
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleTabPress("home")}
        style={[styles.tabButton, activeTab === "home" && styles.activeTab]}
      >
        <Octicons name="home" size={28} color={activeTab === "home" ? "#829DFF" : "#7F7F7F"} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleTabPress("graph")}
        style={[styles.tabButton, activeTab === "graph" && styles.activeTab]}
      >
        <Octicons name="graph" size={28} color={activeTab === "graph" ? "#829DFF" : "#7F7F7F"} />
      </TouchableOpacity>
      <LinearGradient
        colors={["#DEE5FF", "#809AFF"]}
        style={styles.searchButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity activeOpacity={0.8} style={styles.touchableOpacity}>
          <Octicons name="search" size={27} color="white" />
        </TouchableOpacity>
      </LinearGradient>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleTabPress("camera")}
        style={[styles.tabButton, activeTab === "camera" && styles.activeTab]}
      >
        <SimpleLineIcons name="camera" size={28} color={activeTab === "camera" ? "#829DFF" : "#7F7F7F"} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleTabPress("user")}
        style={[styles.tabButton, activeTab === "user" && styles.activeTab]}
      >
        <FontAwesome name="user-o" size={28} color={activeTab === "user" ? "#829DFF" : "#7F7F7F"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff", // Adjust as needed
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tabButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  searchButton: {
    borderRadius: 100,
    overflow: "hidden",
    bottom: 30,
  },
  touchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
    width: 63,
    height: 63,
    borderRadius: 100,
  }
});

export default BottomTabs;
