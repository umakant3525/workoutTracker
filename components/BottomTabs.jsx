import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Modal, Text } from "react-native";
import { Octicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomTabs = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState("home");
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    switch (tabName) {
      case "home":
        navigation.navigate('Screen7');
        break;
      case "graph":
        navigation.navigate('Screen6');
        break;
      case "camera":
        setIsSearchPopupOpen(true);
        break;
      case "user":
        if (route.params && route.params.UserProfile) {
          navigation.navigate('UserProfile');
        } else {
          setIsUserPopupOpen(true);
        }
        break;
      case "search":
        setIsSearchPopupOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.bottomTabs}>
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
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleTabPress("search")} style={styles.touchableOpacity}>
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

      <Modal visible={isUserPopupOpen} transparent animationType="fade">
        <View style={styles.popup}>
          <Text style={styles.popupText}>User Profile screen is not created yet!</Text>
          <TouchableOpacity onPress={() => setIsUserPopupOpen(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={isSearchPopupOpen} transparent animationType="fade">
        <View style={styles.popup}>
          <Text style={styles.popupText}>Search functionality is not implemented yet!</Text>
          <TouchableOpacity onPress={() => setIsSearchPopupOpen(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
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
  },
  activeTab: {
    // Define styles for active tab if needed
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
    elevation: 5,
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default BottomTabs;
