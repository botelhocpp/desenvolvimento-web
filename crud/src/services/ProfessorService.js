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

export class ProfessorService {
  static add = (db, newProfessor, callback) => {
    addDoc(collection(db, 'professor'), newProfessor)
      .then(
        (docRef) => {
          callback(docRef.id)
        }
      )
      .catch(error => console.log(error))
  }

  static list = (db, callback) => {
    getDocs(collection(db, 'professor'))
      .then(
        (professorSnapshot) => {
          const professors = []
          professorSnapshot.forEach(
            (professor) => {
              const id = professor.id
              const { name, subject, salary } = professor.data()
              professors.push({ id, name, subject, salary })
            }
          )
          callback(professors)
        }
      )
      .catch(error => console.log(error))
  }

  static listOnSnapshot = (db, callback) => {
    const q = query(collection(db, 'professor'))
    return onSnapshot(q, (querySnapshot) => {
      const professors = []
      querySnapshot.forEach((professor) => {
        const id = professor.id
        const { name, subject, salary } = professor.data()
        professors.push({ id, name, subject, salary })
      })
      .then(
        callback(professors)
      )
      .catch(error => console.log(error))
    })
  }

  static delete = (db, id, callback) => {
    deleteDoc(doc(db, 'professor', id))
      .then(() => callback(true))
      .catch(error => console.log(error))
  }

  static update = (db, professorId, professor, callback) => {
    const professorRef = doc(db, 'professor', professorId)
    updateDoc(professorRef, professor)
      .then(() => callback(true))
      .catch(error => console.log(error))
  }

  static getProfessorById = (db, professorId, callback) => {
    getDoc(doc(db, 'professor', professorId))
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