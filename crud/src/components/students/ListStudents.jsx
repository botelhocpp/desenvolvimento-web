import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import { StudentService } from "../../services/StudentService";
import PageLoading from '../PageLoading'

const ListStudent = () => {

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)

  const db = useFirebase();

  function handleDeleteStudent(studentId) {
    if (window.confirm('Are you sure you want to delete this student?')) {
      StudentService.delete(db, studentId, (removed) => {
        if (removed) {
          const filteredStudents = students.filter(student => student.id !== studentId)
          setStudents(filteredStudents)
        }
      })
      .catch((e) => {
        console.log("Delete Student ERROR: " + e.message)
      })
    }
  }

useEffect(() => {
  setLoading(true);
  StudentService.list(db, (students) => {
    if (students.length > 0) {
      setStudents(students)
      setLoading(false);
      console.log(students)
    }
  })
  ?.then(() => {

  })
  .catch((e) => {
    console.log("List Student ERROR: " + e.message);
  })
  .finally(() => {
  })
  console.log(loading);
}, [db])

useEffect(() => {
  const unsubscribe = StudentService.listOnSnapshot(db, (data) => setStudents(data))
  return () => {
    unsubscribe()
  }
},[db])

  return (
    <div>
      <h1 className='text-warning fw-bold'>Student List</h1>
      <table className="table mt-3 text-white">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">IRA</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td></td>
              <td>
                <PageLoading />
              </td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            students?.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.ira}</td>
                <td>
                  <Link
                    to={`/editStudent/${student.id}`}
                    className='btn btn-info'
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger ms-3'
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )))}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;