import {
    ArrowCircleLeftRounded,
    ArrowCircleRightRounded,
    ArticleSharp,
} from "@mui/icons-material";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import {
    InputDatePicker,
    InputMaskCelular,
    InputMaskTelefone,
} from "../helpers/inputs/inputMask";

export default function DadosCadastrais({
    aoEnviar,
    aoVoltar,
    validaNome,
    validaEmail,
    validaTelefone,
    validaDataNasc,
}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    var [data, setData] = useState(newDate(new Date()));

    function newDate(date) {
        let day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        let month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let year = date.getFullYear();

        return day + "/" + month + "/" + year;
    }

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
    const [erroData, setErroData] = useState({
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
                    setData(document.querySelector("#data").value);
                    data = document.querySelector("#data").value;
                    if (1 !== 2) {
                        aoEnviar();
                    } else {
                        aoVoltar();
                    }
                }}
                noValidate
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
                            value={nome}
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
                            value={sobrenome}
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
                            value={email}
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
                        <InputMaskTelefone
                            required
                            onKeyUp={(event) => {
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
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputMaskCelular
                            required
                            onKeyUp={(event) => {
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
                        <InputDatePicker
                            id="data"
                            name="data"
                            label="Data Nascimento"
                            value={data}
                            onChange={(event) => {
                                setData(event.target.value);
                            }}
                            onBlur={(event) => {
                                setErroData(validaDataNasc(event.target.value));
                            }}
                            error={!erroData.valido}
                            helperText={erroData.message}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <FormLabel id="lblSexo">Sexo</FormLabel>
                            <RadioGroup
                                row
                                name="sexo"
                                className="justify-content-space-between"
                            >
                                <FormControlLabel
                                    value="f"
                                    control={<Radio />}
                                    label="Feminino"
                                />
                                <FormControlLabel
                                    value="m"
                                    control={<Radio />}
                                    label="Masculino"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Stack direction="row" justifyContent={"space-between"}>
                    <IconButton
                        color="warning"
                        aria-label="previus page"
                        className="btnVoltar"
                        type="submit"
                    >
                        <ArrowCircleLeftRounded fontSize="large" />
                    </IconButton>

                    <IconButton
                        color="success"
                        aria-label="next page"
                        className="btnAvancar"
                        type="submit"
                    >
                        <ArrowCircleRightRounded fontSize="large" />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}
