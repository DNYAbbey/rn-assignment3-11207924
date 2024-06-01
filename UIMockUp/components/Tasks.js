import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';


const Tasks = () => {
  return (
        <View>
        <Text style={styles.subheader}>Ongoing tasks</Text>
        <FlatList 
            data={[
                    { key : "1", text : "Mobile App Development" }, { key : "2", text : "Web Development" },
                    { key : "3", text : "Push Ups" }, { key : "4", text : "Planks" },
                    { key : "5", text : "Preparation For Quiz" }, { key : "6", text : "BreakFast" },
                    { key : "7", text : "Reading" }, { key : "8", text : "Chores" },
                    { key : "9", text : "UI Design" }, { key : "10", text : "Weight Lifting" }, 
                    { key : "11", text : "Math Assignment" },{ key : "12", text : "Preparation For Exams" }, { key : "13", text : "BreakFast" },
                    { key : "14", text : "Meeting At 10:30 AM" }, { key : "15", text : "Laundry" },
                ]}
            renderItem={ ({item}) => <Text style={styles.tasks}>{ item.text }</Text> }
        />
        </View>
  );
};

const styles = StyleSheet.create({
    subheader:{
        fontSize: '20px',
        fontWeight: '700',
        marginLeft: '23px',
        marginTop: '42px',
      },
      tasks:{
        height: '128px',
        width: '90%',
        border: 'solid 1px #E8D1BA',
        backgroundColor: '#FBF9F7',
        borderRadius: '15px',
        fontWeight: 700,
        marginLeft: '20px',
        alignContent: 'center',
        paddingLeft: '20px',
        marginTop: '20px',
        fontSize: '16px',
      },
});

export default Tasks;
