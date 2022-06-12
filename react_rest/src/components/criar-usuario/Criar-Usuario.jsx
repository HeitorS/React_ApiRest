import React, { useState } from "react";
import {
    Container,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import "./css/style.scss";
import {
    AccountCircle,
    ArrowCircleRightRounded,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import {InputMaskCpf} from "../helpers/inputs/inputMask";

export default function CriarUsuario({
    aoEnviar,
    validarCPF,
    validaSenha,
    validaConfSenha,
}) {
    const [cpf, setCpf] = useState({
        textmask: "000.000.000-00",
        value: "",
    });
    const [senha, setSenha] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });
    const [confSenha, setConfSenha] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const [erroCpf, setErroCpf] = useState({ valido: true, message: "" });
    const [erroSenha, setErroSenha] = useState({ valido: true, message: "" });
    const [erroConfSenha, setErroConfSenha] = useState({
        valido: true,
        message: "",
    });

    return (
        <Container className="contentUser">
            <AccountCircle className="userIcon" fontSize="large" />
            <Typography variant="h6" component="h1" align="center">
                Criar Usuário
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
                    <Grid item xs={12}>
                        <InputMaskCpf
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            error={!erroCpf.valido}
                            helperText={erroCpf.message}
                            onKeyUp={(event) => {
                                setCpf({
                                    ...cpf,
                                    value: event.target.value,
                                });
                            }}
                            onBlur={(event) => {
                                setErroCpf(validarCPF(event.target.value));
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl
                            error={!erroSenha.valido}
                            sx={{ m: 1 }}
                            variant="standard"
                            fullWidth
                        >
                            <InputLabel htmlFor="senha">Senha *</InputLabel>
                            <Input
                                id="senha"
                                name="senha"
                                label="Senha"
                                required
                                value={senha.password}
                                error={!erroSenha.valido}
                                type={senha.showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                onChange={(event) => {
                                    setSenha({
                                        ...senha,
                                        password: event.target.value,
                                    });
                                }}
                                onBlur={(event) => {
                                    setErroSenha(
                                        validaSenha(event.target.value)
                                    );
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => {
                                                setSenha({
                                                    ...senha,
                                                    showPassword:
                                                        !senha.showPassword,
                                                });
                                            }}
                                            onMouseDown={(event) => {
                                                event.preventDefault();
                                            }}
                                        >
                                            {senha.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText
                                id="component-error-text"
                                sx={{ color: "#d32f2f" }}
                            >
                                {erroSenha.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl
                            error={!erroConfSenha.valido}
                            sx={{ m: 1 }}
                            variant="standard"
                            fullWidth
                        >
                            <InputLabel htmlFor="confSenha">
                                Confirme sua senha *
                            </InputLabel>
                            <Input
                                id="confSenha"
                                name="confSenha"
                                label="Confirme sua senha"
                                required
                                value={confSenha.password}
                                error={!erroConfSenha.valido}
                                type={
                                    confSenha.showPassword ? "text" : "password"
                                }
                                autoComplete="current-password"
                                onChange={(event) => {
                                    setConfSenha({
                                        ...confSenha,
                                        password: event.target.value,
                                    });
                                }}
                                onBlur={(event) => {
                                    let senha =
                                        document.getElementById("senha").value;
                                    setErroConfSenha(
                                        validaConfSenha(
                                            senha,
                                            event.target.value
                                        )
                                    );
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => {
                                                setConfSenha({
                                                    ...confSenha,
                                                    showPassword:
                                                        !confSenha.showPassword,
                                                });
                                            }}
                                            onMouseDown={(event) => {
                                                event.preventDefault();
                                            }}
                                        >
                                            {confSenha.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText
                                id="component-error-text"
                                sx={{ color: "#d32f2f" }}
                            >
                                {erroConfSenha.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} justifyContent="end" display={"flex"}>
                        <IconButton
                            className="btnNext"
                            aria-label="next page"
                            size="large"
                            type="submit"
                        >
                            <ArrowCircleRightRounded fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
