import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import FormularioCadastro from './components/criar-usuario/Criar-Usuario';

function App() {
  return (
    <Fragment>
      <h1>Formulário de Cadastro</h1>
      <FormularioCadastro/>
    </Fragment>
  );
}

export default App;
