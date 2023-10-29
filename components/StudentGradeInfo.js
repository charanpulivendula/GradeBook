import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentGradeInfo({ gradeAvg, absences, bonus }) {
  return (
    <View style={styles.studentStyle}>
      <View style={{
        flex:1,
        alignItems:'center',
      }}>
        <Text style={styles.text}>
          Average
        </Text>
        <Text style={styles.text}>
          {gradeAvg}
        </Text>

      </View>
      <View style={{
        flex:1,
        alignItems:'center'
      }}>
        <Text style={styles.text}>
          absences
        </Text>
        <Text style={styles.text}>
          {absences}
        </Text>

      </View>
      <View style={{
        flex:1,
        alignItems:'center'
      }}>
        <Text style={styles.text}>
          Bonus
        </Text>
        <Text style={styles.text}>
          {bonus}
        </Text>
        
      </View>
      {/* <Text style={styles.text}>
        {"Average: " + gradeAvg + " | Absences: " + absences}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  studentStyle: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    flex:1,
    flexDirection:'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#344955',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
