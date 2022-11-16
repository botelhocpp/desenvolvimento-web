import { useState } from "react";
import { useFirebase } from "../../context/Firebase";
import { StudentService } from "../../services/StudentService";
import { useNavigate } from 'react-router-dom'
import ButtonLoading from '../ButtonLoading'

export default function CreateStudent() {

  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [ira, setIra] = useState('')
  const [loading, setLoading] = useState(false)

  const db = useFirebase();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const newStudent = { name, course, ira }
    StudentService.add(db, newStudent, (studentId) => {
      navigate('/listStudent')
    })
    .then(() => {
      setName('')
      setCourse('')
      setIra('')
    })
    .catch((e) => {
      console.log("Create Student ERROR: " + e.message);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div>
      <h1 className='text-warning fw-bold'>Create Student</h1>
      
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
              Create student
            </button>
          )}
        </div>
      </form>
    </div>
  );
}