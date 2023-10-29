import React, { useState } from 'react';
import { StyleSheet, ScrollView, FlatList, View, Text, TouchableOpacity, Animated } from 'react-native';
import GradebookEntry from './GradebookEntry';
import { useFocusEffect } from '@react-navigation/native';
// import gradebook  from '../gradebook';
import addStudentsToFirestore from './FirebasePusher';
import { collection,getDocs } from 'firebase/firestore';
import firebase from '../firebaseConfig'
import { getFirestore } from 'firebase/firestore';

export default function HomeScreen({navigation}) {
  //total bonus state management
  const db = getFirestore(firebase);
  const [totalBonusPoints,setTotalBonusPoints] = useState(0)
  const [gradeBook,setGradeBook] = useState([])
  const rewards = ()=>{
      setTotalBonusPoints(totalBonusPoints+1)
      if(totalBonusPoints === 4){
        alert("Dodges For Everyone");
      }
      else if(totalBonusPoints === 9){
        alert("Lambos For Everyone");
      } 
      else if(totalBonusPoints === 14){
        alert('bugattis for everyone')
      } 
  }
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const studentsCollection = collection(db, 'students');
          const querySnapshot = await getDocs(studentsCollection);
          const data = querySnapshot.docs.map((doc) => doc.data());
          setGradeBook(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [])
  );


  // addStudentsToFirestore(gradebook);
  
  return (
    <View style={{
      flex:1,
      flexDirection:'column',
    }}>
        <View style={{
          flex:1,
          height:20,
          backgroundColor:"#344955",
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text style={{
            fontSize:20,
            color:'white'
          }}>
              Z101: Gradebook
          </Text>
        </View>
        <View style={{
          flex:4,
          backgroundColor:"#f9f9f9"
        }}>
          <FlatList data={gradeBook}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item})=>{
            return <GradebookEntry navigation={navigation} studentData={item} rewards={rewards} key={item}/>
          }}/>
        </View>
        <TouchableOpacity
            style = {styles.button}
            onPress={()=>{navigation.navigate("Title")}}
            underlayColor='#fff'>
            <Text style={[styles.buttonText,{color:'white'}]}>Back</Text>
        </TouchableOpacity>
        
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textPart: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  button:{
    elevation:50,
    flex:0.5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#246EE9"
  },
  buttonText:{
   fontSize:20
  }
});
