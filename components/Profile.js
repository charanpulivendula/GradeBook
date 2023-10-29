import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = ({ route }) => {
  const  studentData  = route.params.studentData;
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
       <Image source={{ uri: studentData.imageUri }} style={styles.image} />
       <Text style={styles.name}>Student Profile</Text>
       <View style={styles.detailsContainer}>
         <Text>Absences: {studentData.absences}</Text>
         <Text>Overall Grade Average: {studentData.gradeAvg}</Text>
         <Text>Projects:</Text>
         <View style={styles.projectsContainer}>
           {Object.entries(studentData.projects).map(([project, score]) => (
             <View key={project} style={styles.projectItem}>
               <Text>{project}: {score}</Text>
             </View>
           ))}
         </View>
       </View>
       <TouchableOpacity
            style = {styles.button}
            onPress={()=>{navigation.navigate("Home")}}
            underlayColor='#fff'>
            <Text style={[styles.buttonText,{color:'white'}]}>Home</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex:1
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 10,
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
  projectsContainer: {
    marginTop: 5,
  },
  projectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#246EE9",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
   buttonText:{
    fontSize:20
   }
});

export default Profile;
