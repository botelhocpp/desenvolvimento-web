import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import { useFirebase } from "../../context/Firebase";
import { StudentService } from "../../services/StudentService";
import { useNavigate } from 'react-router-dom'
import ButtonLoading from '../ButtonLoading'

export default function EditStudent() {

  const navigate = useNavigate();
  const { id: studentId } = useParams()
  const db = useFirebase()

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [ira, setIra] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    StudentService.getStudentById(db, studentId, (student) => {
      setName(student.name)
      setCourse(student.course)
      setIra(student.ira)
    })
  }, [db, studentId])

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true);
    const updatedStudent = { name, course, ira }
    StudentService.update(db, studentId, updatedStudent, (updated) => {
      if (updated) {
        navigate('/listStudent')
      }
    })
    .then(() => {

    })
    .catch((e) => {
      console.log("Edit Student ERROR: " + e.message);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div>
      <h1 className='text-warning fw-bold'>Edit Student</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-1 row'>
          <label htmlFor="name">
            Nome:
            <input
              className='form-control'
              placeholder='Type the name of the student'
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>

        <div className='mb-1 row'>
          <label htmlFor="course">
            Curso:
            <input
              className='form-control'
              id="course"
              placeholder='Type the course of the student'
              type="text"
              value={course}
              onChange={e => setCourse(e.target.value)}
            />
          </label>
        </div>
        <div className='mb-1 row'>
          <label htmlFor="ira">
            IRA:
            <input
              className='form-control'
              placeholder='Type the IRA of the student'
              id="ira"
              type="text"
              value={ira}
              onChange={e => setIra(e.target.value)}
            />
          </label>
        </div>
        <div>
        {loading ? (
            <ButtonLoading/>
          ) : (
            <button
              className='btn btn-warning mt-3'
              type="submit"
              disabled={!name || !course || !ira}
            >
              Edit student
            </button>
          )}
        </div>
      </form>
    </div>
  );
}