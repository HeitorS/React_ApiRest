import { render } from '@testing-library/react'

function FormularioCadastro() {

    return(
        <form>
            <label>CPF</label>
            <input type={'text'} placeholder={'Digite seu nome'} maxLength={'150'} required/>
            <label>Nome</label>
            <input type={'text'} placeholder={'Digite seu nome'} maxLength={'150'} required/>
            <label>E-mail</label>
            <input type={'text'} placeholder={'Digite seu nome'} maxLength={'150'} required/>
            <label>Senha</label>
            <input type={'text'} placeholder={'Digite seu nome'} maxLength={'150'} required/>
            <label>Confirmação de Senha</label>
            <input type={'text'} placeholder={'Digite seu nome'} maxLength={'150'} required/>
            <button type={'submit'}>Salvar</button>
        </form>
    );
}

export default FormularioCadastro;