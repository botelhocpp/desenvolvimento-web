import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import { useFirebase } from "../../context/Firebase";
import { ProfessorService } from "../../services/ProfessorService";
import { useNavigate } from 'react-router-dom'
import ButtonLoading from '../ButtonLoading'

export default function EditProfessor() {

  const navigate = useNavigate();
  const { id: professorId } = useParams()
  const db = useFirebase()

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [salary, setSalary] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ProfessorService.getProfessorById(db, professorId, (professor) => {
      setName(professor.name)
      setSubject(professor.subject)
      setSalary(professor.salary)
    })
  }, [db, professorId])

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true);
    const updatedProfessor = { name, subject, salary }
    ProfessorService.update(db, professorId, updatedProfessor, (updated) => {
      if (updated) {
        navigate('/listProfessor')
      }
    })
    .then(() => {

    })
    .catch((e) => {
      console.log("Edit Professor ERROR: " + e.message);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div>
      <h1 className='text-warning fw-bold'>Edit Professor</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-1 row'>
          <label htmlFor="name">
            Nome:
            <input
              className='form-control'
              placeholder='Type the name of the professor'
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>

        <div className='mb-1 row'>
          <label htmlFor="subject">
            SUBJECT:
            <input
              className='form-control'
              id="subject"
              placeholder='Type the subject of the professor'
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
          </label>
        </div>
        <div className='mb-1 row'>
          <label htmlFor="salary">
            SALARY:
            <input
              className='form-control'
              placeholder='Type the salary of the professor'
              id="salary"
              type="text"
              value={salary}
              onChange={e => setSalary(e.target.value)}
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
              disabled={!name || !subject || !salary}
            >
              Edit professor
            </button>
          )}
        </div>
      </form>
    </div>
  );
}