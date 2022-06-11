import {
    ArrowCircleLeftRounded,
    ArrowCircleRightRounded,
    ArticleSharp,
    LibraryBooksSharp,
} from "@mui/icons-material";
import { Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";

export default function DadosCadastrais(
    aoEnviar,
    validaNome,
    validaEmail,
    validaTelefone
) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");

    const [erroNome, setErroNome] = useState({ valido: true, message: "" });
    const [erroSobrenome, setErroSobrenome] = useState({
        valido: true,
        message: "",
    });
    const [erroEmail, setErroEmail] = useState({ valido: true, message: "" });
    const [erroTelefone, setErroTelefone] = useState({
        valido: true,
        message: "",
    });
    const [erroCelular, setErroCelular] = useState({
        valido: true,
        message: "",
    });

    return (
        <Container className="contentInfo">
            <ArticleSharp className="infoIcon" />
            <Typography variant="h6" component="h1" align="center">
                Dados cadastrais
            </Typography>
            <Box
                onSubmit={(event) => {
                    event.preventDefault();
                    aoEnviar();
                }}
                id="dadosUsuario"
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1 },
                }}
                autoComplete="true"
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
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
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            onChange={(event) => {
                                setSobrenome(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroSobrenome(
                                    validaNome(event.target.value)
                                );
                            }}
                            error={!erroSobrenome.valido}
                            helperText={erroSobrenome.message}
                            id="sobrenome"
                            name="sobrenome"
                            label="Sobrenome"
                            type="text"
                            placeholder="Digite seu sobrenome"
                            variant="standard"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroEmail(validaEmail(event.target.value));
                            }}
                            error={!erroEmail.valido}
                            helperText={erroEmail.message}
                            id="email"
                            name="email"
                            label="E-mail"
                            type="email"
                            placeholder="Digite seu e-mail"
                            autoComplete="current-email"
                            variant="standard"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            onChange={(event) => {
                                setTelefone(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroTelefone(
                                    validaTelefone(event.target.value)
                                );
                            }}
                            error={!erroTelefone.valido}
                            helperText={erroTelefone.message}
                            id="telefone"
                            name="telefone"
                            label="Telefone"
                            type="tel"
                            placeholder="Digite seu telefone"
                            variant="standard"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            onChange={(event) => {
                                setCelular(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroCelular(
                                    validaTelefone(event.target.value)
                                );
                            }}
                            error={!erroCelular.valido}
                            helperText={erroCelular.message}
                            id="celular"
                            name="celular"
                            label="Celular"
                            type="text"
                            placeholder="Digite seu celular"
                            variant="standard"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                </Grid>

                
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            onChange={(event) => {
                                setTelefone(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroTelefone(
                                    validaTelefone(event.target.value)
                                );
                            }}
                            error={!erroTelefone.valido}
                            helperText={erroTelefone.message}
                            id="telefone"
                            name="telefone"
                            label="Telefone"
                            type="tel"
                            placeholder="Digite seu telefone"
                            variant="standard"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            onChange={(event) => {
                                setCelular(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroCelular(
                                    validaTelefone(event.target.value)
                                );
                            }}
                            error={!erroCelular.valido}
                            helperText={erroCelular.message}
                            id="celular"
                            name="celular"
                            label="Celular"
                            type="text"
                            placeholder="Digite seu celular"
                            variant="standard"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Stack direction="row" justifyContent={"space-between"}>
                    <IconButton color="warning" aria-label="next page">
                        <ArrowCircleLeftRounded fontSize="large" />
                    </IconButton>

                    <IconButton
                        color="success"
                        aria-label="next page"
                        size="large"
                        type="submit"
                    >
                        <ArrowCircleRightRounded fontSize="large" />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}
