import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryCard = ({imageSource, header, tasks}) => {
  return (
    <View style={styles.categorycard}>
        <Text style={styles.categoryheader}>{header}</Text>
        <Text style={styles.paragraph}>{tasks}</Text>
        <Image source={imageSource} style={styles.categoryCharacter} />
    </View>
  );
};

const styles = StyleSheet.create({
    categorycard:{
        backgroundColor: '#FBF9F7',
        width: '186px',
        height: '200px',
        margin: '20px',
        borderRadius: '15px',
      },
    categoryheader:{
        fontSize: '16px',
        marginLeft: '20px',
        marginTop: '10px',
        fontWeight: '700',
    },
    categoryCharacter:{
        position: 'absolute',
        width: '151px',
        height: '145px',
        left: '25px',
        top: '55px',
    },
    paragraph:{
        fontSize: '12px',
        marginLeft: '20px',
        fontWeight: 500,
    
    },
});

export default CategoryCard;
