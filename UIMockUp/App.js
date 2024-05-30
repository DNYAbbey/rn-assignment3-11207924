import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.intro}>
        <View>
          <Text style={styles.header}>Hello, Devs</Text>
          <Text style={styles.paragraph}>14 tasks today</Text>
        </View>
        <View style={styles.profileimgContainer}><Image source={require('./assets/profileimg.png')} style={styles.profileimg} /></View>
        
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
    fontFamily: 'lato',
  },
  intro:{
    display: 'flex',
    flexDirection: 'row',  
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
  },
  header:{
    fontSize: '32px',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '52px',
  },
  paragraph:{
    fontSize: '12px',
    marginLeft: '20px',
    fontWeight: 500,
  },
  profileimgContainer:{
    width: '60px',
    height: '60px',
    backgroundColor: 'white',
    marginTop: '58px',
    marginRight: '20px',
    borderRadius:'50%',
  },
  profileimg:{
    width: '43px',
    height: '43px',
    margin: 'auto',
    zIndex: 100,
  },
});
