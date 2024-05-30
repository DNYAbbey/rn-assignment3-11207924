import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, } from 'react-native';

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
        <TouchableOpacity style={styles.filter}><Image source={require('./assets/filtericon.png')} style={styles.filtericon} /></TouchableOpacity>
      </View>

      <View>
        <Text style={styles.subheader}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Exercise</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/youngwomanworking.png')} style={styles.categoryCharacter} />
          </View>
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Study</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/womanworking.png')} style={styles.categoryCharacter} />
          </View>
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Cook</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/casual-life-3d-boy-cook.png')} style={styles.categoryCharacter} />
          </View>
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Code</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/womanworking.png')} style={styles.categoryCharacter} />
          </View>
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Assignments</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/casual-life-3d-young-woman-looking-at-laptop-and-taking-notes-in-notebook.png')} style={styles.categoryCharacter} />
          </View>
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Clean</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/3d-casual-life-cleaning-service.png')} style={styles.categoryCharacter} />
          </View>
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Attend Lectures</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/3d-casual-life-young-people-listening-to-a-lecture.png')} style={styles.categoryCharacter} />
          </View>
          <View style={styles.categorycard}>
            <Text style={styles.categoryheader}>Raed Books</Text>
            <Text style={styles.paragraph}>12 tasks</Text>
            <Image source={require('./assets/3d-business-little-girl-reading-a-book.png')} style={styles.categoryCharacter} />
          </View>
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
  filter:{
    backgroundColor: '#F0522F',
    borderRadius:'14px',
    width: '50px',
    height: '45px',
    marginTop: '25px',
    marginRight: '20px',
  },
  filtericon:{
    height: '25.5px',
    width: '28.5px',
    margin: 'auto',
  },
  subheader:{
    fontSize: '20px',
    fontWeight: '700',
    marginLeft: '23px',
    marginTop: '42px',
  },
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
    marginTop: '15px',
    fontWeight: '700',
  },
  categoryCharacter:{
    position: 'absolute',
    width: '151px',
    height: '145px',
    left: '25px',
    top: '55px',
  },
});
