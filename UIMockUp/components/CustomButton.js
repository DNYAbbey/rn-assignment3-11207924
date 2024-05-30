import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, imageSource, accessibilityLabel, buttonStyle, imageStyle }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, buttonStyle]} 
      onPress={onPress} 
      accessibilityLabel={accessibilityLabel}
    >
      <Image 
        source={imageSource} 
        style={[styles.buttonImage, imageStyle]} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F0522F',
    borderRadius:'14px',
    width: '50px',
    height: '45px',
    marginTop: '25px',
    marginRight: '20px',
  },
  buttonImage: {
    height: '25.5px',
    width: '28.5px',
    margin: 'auto',
  },
});

export default CustomButton;
