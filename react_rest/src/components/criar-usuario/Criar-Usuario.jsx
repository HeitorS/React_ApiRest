import React, { useState } from "react";
import { Fragment } from "react";
import Stack from "@mui/material/Stack";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./css/style.scss";

function FormularioCadastro({ aoEnviar, validarCPF, validaNome, validaEmail, validaSenha, validaConfSenha }) {
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");
    const [erroCpf, setErroCpf] = useState(
        { valido: true, message: "" }
    );
    const [erroNome, setErroNome] = useState(
        { valido: true, message: "" }
    );
    const [erroEmail, setErroEmail] = useState(
        { valido: true, message: "" }
    );
    const [erroSenha, setErroSenha] = useState(
        { valido: true, message: "" }
    );
    const [erroConfSenha, setErroConfSenha] = useState(
        { valido: true, message: "" }
    );

    return (
        <Fragment>
            <div className="cadastro">
                <h1>Formulário de Cadastro</h1>
                <Box
                    onSubmit={(event) => {
                        event.preventDefault();
                        aoEnviar({ cpf, nome, email, senha, confSenha });
                    }}
                    id="dadosUsuario"
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1 },
                    }}
                    autoComplete="true"
                >
                    <Stack direction="column">
                        <TextField
                            onChange={(event) => {
                                setCpf(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroCpf(validarCPF(event.target.value));
                                setErroCpf(validarCPF(event.target.value));
                            }}
                            error={!erroCpf.valido}
                            helperText={erroCpf.message}
                            required
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            variant="standard"
                        />

                        <TextField
                            required
                            onChange={(event) => {
                                setNome(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroNome(validaNome(event.target.value));
                            }}
                            error={!erroNome.valido}
                            helperText={erroNome.message}
                            id="nome"
                            name="nome"
                            label="Nome"
                            placeholder="Digite seu nome"
                            variant="standard"
                            margin="normal"
                        />

                        <TextField
                            required
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            onBlur={(event)=> {
                                setErroEmail(validaEmail(event.target.value));
                            }}
                            error={!erroEmail.valido}
                            helperText={erroEmail.message}
                            id="email"
                            name="email"
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                            autoComplete="current-email"
                            variant="standard"
                            margin="normal"
                        />

                        <TextField
                            required
                            onChange={(event) => {
                                setSenha(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroSenha(validaSenha(event.target.value));
                            }}
                            error={!erroSenha.valido}
                            helperText={erroSenha.message}
                            id="senha"
                            name="senha"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            margin="normal"
                        />

                        <TextField
                            required
                            onChange={(event) => {
                                setConfSenha(event.target.value);
                            }}
                            onBlur={(event) => {
                                let senha = document.getElementById("senha").value;
                                setErroConfSenha(validaConfSenha(senha,event.target.value));
                            }}
                            error={!erroConfSenha.valido}
                            helperText={erroConfSenha.message}
                            id="confSenha"
                            name="confSenha"
                            label="Confirme sua Senha"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            margin="normal"
                        />
                        <Button
                            id="btnSubmit"
                            variant="contained"
                            color="primary"
                            size="small"
                            type="submit"
                        >
                            Salvar
                        </Button>
                    </Stack>
                </Box>
            </div>
        </Fragment>
    );
}

export default FormularioCadastro;
