import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CadastroProjeto from './components/cadastros/cadastroProjeto/CadastroProjeto';
import CadastroGrupo from './components/cadastros/cadastroGrupo/CadastroGrupo';
import Home from './components/estaticos/home/Home';
import Footer from './components/estaticos/footer/Footer';
import ListaGrupos from './components/paginas/listagrupos/ListaGrupos';
import ListaProjetos from './components/paginas/listaprojetos/ListaProjetos';
import ListaTurmas from './components/paginas/listaturmas/ListaTurmas';
import CadastroTurma from './components/cadastros/cadastroTurma/CadastroTurma';
import DeletarProjeto from './components/cadastros/deletarProjeto/deletarProjeto';
import DeletarTurma from './components/cadastros/deletarTurma/deletarTurma';
import Navbar from './components/estaticos/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/grupos' element={<ListaGrupos />} />

        <Route path='/projetos' element={<ListaProjetos />} />

        <Route path='/turmas' element={<ListaTurmas />} />

        <Route path='/cadastrogrupo' element={<CadastroGrupo />} />

        <Route path='/cadastroprojeto' element={<CadastroProjeto />} />

        <Route path='/cadastroturma' element={<CadastroTurma />} />

        <Route path="/cadastrogrupos/:id" element={<CadastroGrupo />} />

        <Route path="/cadastroprojetos/:id" element={<CadastroProjeto />} />

        <Route path="/cadastroturma/:id" element={<CadastroTurma />} />

        <Route path="/deletarProjeto/:id" element={<DeletarProjeto />} />

        <Route path="/deletarTurma/:id" element={<DeletarTurma />} />
        
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
