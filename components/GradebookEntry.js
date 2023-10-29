import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import StudentGradeInfo from './StudentGradeInfo';
import gradebook from '../gradebook';

export default function GradebookEntry({ navigation, studentData , rewards }) {
  //bonus state management
  const [bonus,setBonus] = useState(0);
  const onPress = ()=>{
    setBonus(bonus+1);
    rewards();
  }

  return (
    <View style={{
      flexDirection:'row',
      flex:1,
      height:200,
      backgroundColor: '#fff',
      padding: 10,
      margin: 10,
      borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
    }} >
      {/* cannot use onStartShouldSetResponder={()=>{navigation.navigate("Profile",{studentData:studentData})}} for smoothness of the application */}
      <View style={{
          flex:0.4,
          alignItems:'center',
          justifyContent:'center'
      }}>
        <Image source={{ uri: studentData.imageUri }} style={styles.image} />
        <Text style={styles.name}>{studentData.name}</Text>
      </View>
      <View style={{
        flex:0.6,
        flexDirection:'column',
      }}>
        <View style={{
          flex : 0.4,
          backgroundColor:'#344955',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text style={{
            color:"white"
          }}>Grade</Text>
          <Text style={{
            color:"white"
          }}>{studentData.gradeAvg}</Text>
        </View>
        <View style={{
          flex:0.6,
        }}>
          <StudentGradeInfo gradeAvg={studentData.gradeAvg} absences={studentData.absences} bonus={bonus} />
          {/* <Button title='Award Bonus Point' onPress={onPress}></Button> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPress}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>Bonus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{navigation.navigate("Profile",{studentData:studentData})}}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 125,
    borderRadius: 125 / 2,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button:{
    marginTop:10,
    width:100,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#246EE9',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center'
  }
});
