import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import SearchFrame from './components/SearchFrame';
import CategoryCard from './components/CategoryCard';
import HeaderFrame from './components/HeaderFrame';
import Tasks from './components/Tasks';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HeaderFrame/>
      <SearchFrame/>

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

      <Tasks/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
    fontFamily: 'lato',
    paddingBottom: '15px',
  },
  subheader:{
    fontSize: '20px',
    fontWeight: '700',
    marginLeft: '23px',
    marginTop: '42px',
  },
});
