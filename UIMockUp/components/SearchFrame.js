import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import CustomButton from './CustomButton';

const SearchFrame = () => {
  return (
        <View style={styles.intro}>
        <View> 
        <TextInput placeholder='Search' style={styles.searchbar}/>
        <Image source={require('../assets/searchicon.png')} style={styles.searchicon} />
        </View>
        <CustomButton 
            onPress={() => console.log('Filter results!')}
            imageSource={require('../assets/filtericon.png')}
            accessibilityLabel="Custom filter icon"
            buttonStyle={styles.customButtonStyle}
            imageStyle={styles.customImageStyle}
        />
        </View>
  );
};

const styles = StyleSheet.create({
    intro:{
        display: 'flex',
        flexDirection: 'row',  
        alignItems: 'flex-start', 
        justifyContent: 'space-between',
    },
    searchbar:{
        border: 'solid 1px  #FBF9F7',
        borderRadius: '14px',
        width: '280px',
        height: '49px',
        paddingLeft: '50px',
        marginLeft: '18px',
        marginTop: '25px',
        backgroundColor: '#FBF9F7',
        fontWeight: '700',
        fontSize: '16px',
      }, 
      searchicon:{
        position: 'relative',
        width: '16px',
        height: '16px',
        left: '35px',
        top: '-33px',
        cursor: 'pointer',
      },
});

export default SearchFrame;
