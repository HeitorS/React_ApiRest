import { Step, StepLabel, Stepper } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import CriarUsuario from "./Criar-Usuario";
import DadosCadastrais from "./Dados-Cadastrais";
import EnderecoUsuario from "./Endereco-Usuario";

export default function Cadastro({ aoEnviar }) {
    const [page, setPage] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});
    useEffect(() => {
        if (page === 3) {
            aoEnviar(dadosColetados);
        }
    });
    const formularios = [
        <CriarUsuario aoEnviar={prosseguir} />,
        <DadosCadastrais aoEnviar={prosseguir} aoVoltar={voltar} />,
        <EnderecoUsuario aoEnviar={aoEnviar} aoVoltar={voltar} />,
    ];

    function prosseguir(dados) {
        setDadosColetados({ ...dadosColetados, ...dados });
        setPage(page + 1);
    }

    function voltar() {
        if (page !== 0) {
            setPage(page + 1);
        }
    }
    return (
        <Fragment>
            <Stepper activeStep={page}>
                <Step>
                    <StepLabel>Criar Usuário</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Dados Cadastrais</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Endereço Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalizado</StepLabel>
                </Step>
            </Stepper>
            <div className="cadastro">
                <>{formularios[page]}</>
            </div>
        </Fragment>
    );
}
