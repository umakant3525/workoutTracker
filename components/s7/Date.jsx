import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const DateComponent = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const days = [
        { id: "1", date: "5", day: "Sun" },
        { id: "2", date: "6", day: "Mon" },
        { id: "3", date: "7", day: "Tue" },
        { id: "4", date: "8", day: "Wed" },
        { id: "5", date: "9", day: "Thu" },
        { id: "6", date: "10", day: "Fri" },
        { id: "7", date: "11", day: "Sat" },
        // Add more dates as needed
    ];
    
    const [hoveredDate, setHoveredDate] = useState(null);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerTextContainer}>
                <Ionicons name="chevron-back" size={20} color="black" style={styles.icon} />
                <Text style={styles.monthText}>FEB  2024</Text>
                <Ionicons name="chevron-forward" size={20} color="black" style={styles.icon} />
            </View>
         
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                {days.map((day) => (
                    <Pressable
                        key={day.id}
                        onPressIn={() => setHoveredDate(day.id)}
                        onPressOut={() => setHoveredDate(null)}
                    >
                        <LinearGradient
                            start={{ x: 1, y: 1 }} // Starting position of gradient (top-left corner)
                            end={{ x: 0, y: 0 }} // Ending position of gradient (bottom-right corner)
                            colors={hoveredDate === day.id ? ['#8DA4FF', '#D1DBFF'] : ['#ffff', '#ffff']}
                            style={styles.dateCard}
                        >
                            <Text style={[styles.dayText, { color: hoveredDate === day.id ? 'white' : 'black' }]}>
                                {day.day}
                            </Text>
                            <Text style={[styles.dateText, { color: hoveredDate === day.id ? 'white' : 'black' }]}>
                                {day.date}
                            </Text>
                        </LinearGradient>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default DateComponent;

const styles = StyleSheet.create({
    container: {
        marginBottom : 20
    },
    headerTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 90,
        marginBottom: 20,
    },
    monthText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    dayText: {
        fontSize: 13,
        fontWeight: '400',
        color: '#454545',
    },
    dateText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    dateCard: {
        marginHorizontal: 5,
        height: 85,
        width: 70,
        borderRadius: 9,
        borderWidth: 0.4,
        borderColor: "#F5F5F5",
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
});
