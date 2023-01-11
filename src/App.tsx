import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projetos from './components/paginas/projetos/Projetos';
import Turmas from './components/paginas/turmas/Turmas';
import Grupos from './components/paginas/grupos/Grupos';
import CustomNavbar from './components/estaticos/navbar/GenWorks';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grupos' element={<Grupos />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/turmas' element={<Turmas />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
