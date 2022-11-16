import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import { ProfessorService } from "../../services/ProfessorService";
import PageLoading from '../PageLoading'

const ListProfessor = () => {

  const [professors, setProfessors] = useState([])
  const [loading, setLoading] = useState(false)

  const db = useFirebase();

  function handleDeleteProfessor(professorId) {
    if (window.confirm('Are you sure you want to delete this professor?')) {
      ProfessorService.delete(db, professorId, (removed) => {
        if (removed) {
          const filteredProfessors = professors.filter(professor => professor.id !== professorId)
          setProfessors(filteredProfessors)
        }
      })
      .catch((e) => {
        console.log("Delete Professor ERROR: " + e.message)
      })
    }
  }

useEffect(() => {
  setLoading(true);
  ProfessorService.list(db, (professors) => {
    if (professors.length > 0) {
      setProfessors(professors)
      setLoading(false);
    }
  })
  ?.then(() => {

  })
  .catch((e) => {
    console.log("List Professor ERROR: " + e.message);
  })
  .finally(() => {
  })
  console.log(loading);
}, [db])

useEffect(() => {
  const unsubscribe = ProfessorService.listOnSnapshot(db, (data) => setProfessors(data))
  return () => {
    unsubscribe()
  }
},[db])

  return (
    <div>
      <h1 className='text-warning fw-bold'>Professor List</h1>
      <table className="table mt-3 text-white">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Salary</th>
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
            professors?.map(professor => (
              <tr key={professor.id}>
                <td>{professor.name}</td>
                <td>{professor.subject}</td>
                <td>{professor.salary}</td>
                <td>
                  <Link
                    to={`/editProfessor/${professor.id}`}
                    className='btn btn-info'
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger ms-3'
                    onClick={() => handleDeleteProfessor(professor.id)}
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

export default ListProfessor;