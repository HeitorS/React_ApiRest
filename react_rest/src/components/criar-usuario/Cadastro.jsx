import React, { useState, Fragment } from "react";
import CriarUsuario from "./Criar-Usuario";
import DadosCadastrais from "./Dados-cadastrais";
import EnderecoUsuario from "./Endereco-Usuario";

export default function Cadastro({ aoEnviar, validarCPF, validaNome, validaEmail, validaSenha, validaConfSenha }) {
    const [page, setPage] = useState(0);
    const formularios = [
        <CriarUsuario aoEnviar={proximo} validarCPF={validarCPF} validaSenha={validaSenha} validaConfSenha={validaConfSenha}/>,
        <DadosCadastrais aoEnviar={proximo} validaNome={validaNome} validaEmail={validaEmail}/>,
        <EnderecoUsuario aoEnviar={aoEnviar}/>
    ];

    function proximo() {
        setPage(page + 1)
    }
    return (
        <div className="cadastro">
            <>{formularios[page]}</>
        </div>
    );
}