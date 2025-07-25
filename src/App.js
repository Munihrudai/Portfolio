import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Summary from './Summary';
import Education from './Education';
import Projects from './Projects';
import Publications from './Publications';
import Skills from './Skills';
import Certificates from './Certificates';

function Main() {
  return (
    <div>
      <h1>Potta Muni Hrudai</h1>
      <Summary />
      <Education />
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
