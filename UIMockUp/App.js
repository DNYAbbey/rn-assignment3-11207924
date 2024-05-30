import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, } from 'react-native';
import CustomButton from './components/CustomButton';
import CategoryCard from './components/CategoryCard';

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

      <View style={styles.intro}>
        <View> 
          <TextInput placeholder='Search' style={styles.searchbar}/>
          <Image source={require('./assets/searchicon.png')} style={styles.searchicon} />
        </View>
        <CustomButton 
          onPress={() => console.log('Filter results!')}
          imageSource={require('./assets/filtericon.png')}
          accessibilityLabel="Custom filter icon"
          buttonStyle={styles.customButtonStyle}
          imageStyle={styles.customImageStyle}
        />
      </View>

      <View>
        <Text style={styles.subheader}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
        <CategoryCard imageSource ={require('./assets/youngwomanworking.png')} header={'Exercise'} tasks={'12 tasks'} />
          <CategoryCard imageSource ={require('./assets/womanworking.png')} header={'Study'} tasks={'12 tasks'} />
          <CategoryCard imageSource ={require('./assets/casual-life-3d-boy-cook.png')} header={'Cook'} tasks={'12 tasks'} />
          <CategoryCard imageSource ={require('./assets/womanworking.png')} header={'Code'} tasks={'12 tasks'} />
          <CategoryCard imageSource ={require('./assets/3d-casual-life-cleaning-service.png')} header={'Clean'} tasks={'12 tasks'} />
          <CategoryCard imageSource ={require('./assets/casual-life-3d-young-woman-looking-at-laptop-and-taking-notes-in-notebook.png')} header={'Assignments'} tasks={'12 tasks'} />
          <CategoryCard imageSource ={require('./assets/3d-casual-life-young-people-listening-to-a-lecture.png')} header={'Meetings'} tasks={'12 tasks'} />
          <CategoryCard imageSource ={require('./assets/3d-business-little-girl-reading-a-book.png')} header={'Read Books'} tasks={'12 tasks'} />
        </ScrollView>
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
  searchbar:{
    border: 'solid 1px  #FBF9F7',
    borderRadius: '14px',
    width: '100%',
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
  subheader:{
    fontSize: '20px',
    fontWeight: '700',
    marginLeft: '23px',
    marginTop: '42px',
  },
});
