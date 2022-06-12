import React, { useState, Fragment } from "react";
import CriarUsuario from "./Criar-Usuario";
import DadosCadastrais from "./Dados-cadastrais";
import EnderecoUsuario from "./Endereco-Usuario";

export default function Cadastro({ aoEnviar, validarCPF, validaNome, validaEmail, validaSenha, validaConfSenha, validaTelefone, validaDataNasc }) {
    const [page, setPage] = useState(0);
    const formularios = [
        <DadosCadastrais aoEnviar={prosseguir} aoVoltar={voltar()} validaNome={validaNome} validaEmail={validaEmail} validaTelefone={validaTelefone} validaDataNasc={validaDataNasc}/>,
        <CriarUsuario aoEnviar={prosseguir} validarCPF={validarCPF} validaSenha={validaSenha} validaConfSenha={validaConfSenha}/>,
        <EnderecoUsuario aoEnviar={aoEnviar} aoVoltar={voltar()}/>
    ];

    function prosseguir() {
        setPage(page + 1)
    }

    function voltar() {
        if (page !== 0) {
            setPage(page - 1)
        }
    }
    return (
        <div className="cadastro">
            <>{formularios[page]}</>
        </div>
    );
}