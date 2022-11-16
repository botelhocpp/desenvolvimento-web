import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { Routes, Route, Link } from 'react-router-dom'
import CreateStudent from './components/students/CreateStudent';
import ListStudent from './components/students/ListStudents';
import EditStudent from './components/students/EditStudent';
import CreateProfessor from './components/professor/CreateProfessor';
import ListProfessor from './components/professor/ListProfessor';
import EditProfessor from './components/professor/EditProfessor';
import Home from './components/Home';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to={'/'} className='navbar-brand text-danger' style={{ paddingLeft: 10 }}>Staff & Students Management</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Student Management
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={'/listStudent'} className='dropdown-item'>List Estudents</Link>
                </li>
                <li>
                  <Link to={'/createStudent'} className='dropdown-item'>Create Estudent</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor Management
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={'/listProfessor'} className='dropdown-item'>List Professors</Link>
                </li>
                <li>
                  <Link to={'/createProfessor'} className='dropdown-item'>Create Professor</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/listStudent' element={<ListStudent />} />
        <Route path='/createStudent' element={<CreateStudent />} />
        <Route path='/editStudent/:id' element={<EditStudent />} />

        <Route path='/listProfessor' element={<ListProfessor />} />
        <Route path='/createProfessor' element={<CreateProfessor />} />
        <Route path='/editProfessor/:id' element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
