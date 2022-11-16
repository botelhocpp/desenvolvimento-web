import { useState } from "react";
import { useFirebase } from "../../context/Firebase";
import { ProfessorService } from "../../services/ProfessorService";
import { useNavigate } from 'react-router-dom'
import ButtonLoading from '../ButtonLoading'

export default function CreateProfessor() {

  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [salary, setSalary] = useState('')
  const [loading, setLoading] = useState(false)

  const db = useFirebase();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const newProfessor = { name, subject, salary }
    ProfessorService.add(db, newProfessor, (professorId) => {
      navigate('/listProfessor')
    })
    .then(() => {
      setName('')
      setSubject('')
      setSalary('')
    })
    .catch((e) => {
      console.log("Create Professor ERROR: " + e.message);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div>
      <h1 className='text-warning fw-bold'>Create Professor</h1>
      
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
              Create professor
            </button>
          )}
        </div>
      </form>
    </div>
  );
}