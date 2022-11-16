import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  query,
  onSnapshot
} from "firebase/firestore";

export class StudentService {
  static add = (db, newStudent, callback) => {
    addDoc(collection(db, 'student'), newStudent)
      .then(
        (docRef) => {
          callback(docRef.id)
        }
      )
      .catch(error => console.log(error))
  }

  static list = (db, callback) => {
    getDocs(collection(db, 'student'))
      .then(
        (studentSnapshot) => {
          const students = []
          studentSnapshot.forEach(
            (student) => {
              const id = student.id
              const { name, course, ira } = student.data()
              students.push({ id, name, course, ira })
            }
          )
          callback(students)
        }
      )
      .catch(error => console.log(error))
  }

  static listOnSnapshot = (db, callback) => {
    const q = query(collection(db, 'student'))
    return onSnapshot(q, (querySnapshot) => {
      const students = []
      querySnapshot.forEach((student) => {
        const id = student.id
        const { name, course, ira } = student.data()
        students.push({ id, name, course, ira })
      })
      .then(
        callback(students)
      )
      .catch(error => console.log(error))
    })
  }

  static delete = (db, id, callback) => {
    deleteDoc(doc(db, 'student', id))
      .then(() => callback(true))
      .catch(error => console.log(error))
  }

  static update = (db, studentId, student, callback) => {
    const studentRef = doc(db, 'student', studentId)
    updateDoc(studentRef, student)
      .then(() => callback(true))
      .catch(error => console.log(error))
  }

  static getStudentById = (db, studentId, callback) => {
    getDoc(doc(db, 'student', studentId))
      .then(
        (docSnap) => {
          if (docSnap.exists()) {
            callback(docSnap.data())
          }
        }
      )
      .catch(error => console.log(error))
  }

}