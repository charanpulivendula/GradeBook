import React, { useState, useContext,useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import StudentGradeInfo from './StudentGradeInfo';
import { GradebookContext } from './GradebookContext';

export default function GradebookEntry({ navigation, studentData, rewards }) {
  const [bonus, setBonus] = useState(0);
  const [grade,setGrade] = useState(studentData.gradeAvg)
  const { thresholds, setThresholds, gradeBook,highScore, lowScore, setHighScore, setLowScore } = useContext(GradebookContext);

  const onPress = () => {
    setBonus(bonus + 1);
    rewards();
  }

  const getGradeColor = (grade) => {
    if (grade >= thresholds[0]) {
      return ['green', 'A+']; // A+
    } else if (grade >= thresholds[1]) {
      return ['blue', 'A']; // A
    } else if (grade >= thresholds[2]) {
      return ['orange', 'B']; // B
    } else {
      return ['red', 'F']; // Below B
    }
  };
  useEffect(() => {
    // Update highScore and lowScore when gradeBook changes
    if(grade>highScore){
      setHighScore(grade);
    }
    if(grade<lowScore){
      setLowScore(grade);
    }
  }, [grade]);

  const increaseGrade = () => {
    // Logic to increase the grade
    setGrade(grade+1)
  };

  const decreaseGrade = () => {
    // Logic to decrease the grade
    setGrade(grade-1)
  };

  return (
    <View style={styles.container}>
      <View style={{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image source={{ uri: studentData.imageUri }} style={styles.image} />
        <View style={{ backgroundColor: getGradeColor(grade)[0], padding: 5, borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>{getGradeColor(grade)[1]}</Text>
        </View>
        <Text style={styles.name}>{studentData.name}</Text>
      </View>
      <View style={{
        flex: 0.6,
        flexDirection: 'column',
      }}>
        <View style={{
          flex: 0.4,
          backgroundColor: '#344955',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{
            color: "white"
          }}>Grade</Text>
          <Text style={{
            color: "white"
          }}>{grade}</Text>
        </View>
        <View style={{
          flex: 0.6,
        }}>
          <StudentGradeInfo gradeAvg={grade} absences={studentData.absences} bonus={bonus} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPress}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>Bonus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={increaseGrade}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>+ grade</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={decreaseGrade}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>- grade</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { navigation.navigate("Profile", { studentData: studentData }) }}
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
    flexDirection: 'row',
    flex: 1,
    height: 200,
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
  button: {
    marginTop: 10,
    width: 100,
    backgroundColor: '#246EE9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

   
