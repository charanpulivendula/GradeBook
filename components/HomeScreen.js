import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GradebookEntry from './GradebookEntry';
import { useFocusEffect } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import firebase from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import { GradebookContext } from './GradebookContext';

export default function HomeScreen({ navigation }) {
  const db = getFirestore(firebase);
  const { gradeBook, setGradeBook, totalBonusPoints, setTotalBonusPoints, highScore, lowScore, setHighScore, setLowScore } = useContext(GradebookContext);

  const rewards = () => {
    setTotalBonusPoints(totalBonusPoints + 1);
    if (totalBonusPoints === 4) {
      alert("Dodges For Everyone");
    } else if (totalBonusPoints === 9) {
      alert("Lambos For Everyone");
    } else if (totalBonusPoints === 14) {
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
  
          // Filter out non-numeric grades
          const grades = data.map(student => student.gradeAvg).filter(grade => !isNaN(grade));
  
          // Check if there are valid grades before calculating high and low scores
          if (grades.length > 0) {
            setHighScore(Math.max(...grades));
            setLowScore(Math.min(...grades));
          } else {
            // Handle case where all grades are non-numeric or empty
            setHighScore(100);
            setLowScore(0);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [])
  );
  

  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        height: 20,
        backgroundColor: "#344955",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 20,
          color: 'white'
        }}>
          Z101: Gradebook
        </Text>
      </View>
      <View style={{
        flex: 4,
        backgroundColor: "#f9f9f9"
      }}>
        <View style={styles.thresholdContainer}>
          <Text style={styles.thresholdText}>
            High Score: {highScore}
          </Text>
          <Text style={styles.thresholdText}>
            Low Score: {lowScore}
          </Text>
        </View>
        <FlatList
          data={gradeBook}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <GradebookEntry navigation={navigation} studentData={item} rewards={rewards} key={item} />
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { navigation.navigate("Title") }}
        underlayColor='#fff'>
        <Text style={[styles.buttonText, { color: 'white' }]}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    elevation: 50,
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#246EE9"
  },
  buttonText: {
    fontSize: 20
  },
  thresholdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  thresholdText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
