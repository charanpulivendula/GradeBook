import { collection, addDoc, getFirestore } from 'firebase/firestore';
import firebase from '../firebaseConfig';

const addStudentsToFirestore = async (gradebook) => {
  try {
    const db = getFirestore(firebase);

    // Loop through each student in the gradebook
    Object.keys(gradebook).forEach(async (studentName) => {
      const studentData = gradebook[studentName];

      // Use addDoc to add each student to the 'students' collection
      await addDoc(collection(db, 'students'), studentData);
    });

    console.log('Students added to Firestore successfully!');
  } catch (error) {
    console.error('Error adding students to Firestore:', error);
  }
};

export default addStudentsToFirestore;
