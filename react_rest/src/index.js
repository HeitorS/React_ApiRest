import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { validaCPF, validaNome, validaEmail, validaSenha, validaConfSenha, validaTelefone, validaCelular } from './components/helpers/validacoes/validacoes';
import Cadastro from './components/criar-usuario/Cadastro';
import ValidacoesCadastro from './components/helpers/contexts/ValidacoesCadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/criar-usuario" element={
          <ValidacoesCadastro.Provider value={{
            // Criar-Usuario
            cpf: validaCPF,
            senha: validaSenha,
            confSenha: validaConfSenha,
            // Dados-Cadastrais
            nome: validaNome,
            sobrenome: validaNome,
            email: validaEmail,
            telefone: validaTelefone,
            celular: validaCelular
          }}>
            <Cadastro />
          </ValidacoesCadastro.Provider>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
