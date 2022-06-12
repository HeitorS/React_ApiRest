import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { aoEnviarFormulario } from './components/helpers/submits/envioFormulario.js'
import { validaCPF, validaNome, validaEmail, validaSenha, validaConfSenha, validaTelefone, validaDataNasc } from './components/helpers/validacoes/validacoes';
import Cadastro from './components/criar-usuario/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/criar-usuario" element={<Cadastro 
          aoEnviar={aoEnviarFormulario} 
          validarCPF={validaCPF} 
          validaNome={validaNome} 
          validaEmail={validaEmail} 
          validaSenha={validaSenha}
          validaConfSenha={validaConfSenha}
          validaTelefone={validaTelefone}
          validaDataNasc={validaDataNasc} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
