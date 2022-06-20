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
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../helpers/contexts/ValidacoesCadastro";
import { newDate } from "../helpers/convert/data_string";
import useValidated from "../helpers/hooks/useValidated";
import {
    InputDatePicker,
    InputMaskCelular,
    InputMaskTelefone,
} from "../helpers/inputs/inputMask";

export default function DadosCadastrais({
    aoEnviar,
    aoVoltar
}) {
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, camposValidos] = useValidated(validacoes);

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    var [data, setData] = useState(newDate(new Date()));

    return (
        <Container className="contentInfo">
            <ArticleSharp className="infoIcon" />
            <Typography variant="h6" component="h1" align="center">
                Dados Pessoais
            </Typography>
            <Box
                onSubmit={(event) => {
                    event.preventDefault();
                    setData(document.querySelector("#data").value);
                    data = document.querySelector("#data").value;
                    if (
                        event.nativeEvent.submitter.classList.contains(
                            "btnAvancar"
                        )
                    ) {
                        if (camposValidos) {
                            aoEnviar({
                                dados: {
                                    nome,
                                    sobrenome,
                                    email,
                                    telefone,
                                    celular,
                                    data,
                                },
                            });
                        }
                    } else {
                        aoVoltar();
                    }
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
                            onBlur={validarCampos}
                            value={nome}
                            error={!erros.nome.valido}
                            helperText={erros.nome.message}
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
                            onBlur={validarCampos}
                            error={!erros.sobrenome.valido}
                            helperText={erros.sobrenome.message}
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
                            onBlur={validarCampos}
                            error={!erros.email.valido}
                            helperText={erros.email.message}
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
                            onBlur={validarCampos}
                            error={!erros.telefone.valido}
                            helperText={erros.telefone.message}
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
                            onBlur={validarCampos}
                            error={!erros.celular.valido}
                            helperText={erros.celular.message}
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
