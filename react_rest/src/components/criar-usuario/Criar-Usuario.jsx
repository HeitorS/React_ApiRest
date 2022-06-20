import React, { useContext, useState } from "react";
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
import { InputMaskCpf } from "../helpers/inputs/inputMask";
import ValidacoesCadastro from "../helpers/contexts/ValidacoesCadastro";
import useValidated from "../helpers/hooks/useValidated";

export default function CriarUsuario({ aoEnviar }) {
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, camposValidos] = useValidated(validacoes);

    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState({
        password: "",
        showPassword: false,
    });
    const [confSenha, setConfSenha] = useState({
        password: "",
        showPassword: false,
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
                    if (camposValidos()) {
                        aoEnviar({ usuario: { cpf, senha, confSenha } });
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
                    <Grid item xs={12}>
                        <InputMaskCpf
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            required
                            error={!erros.cpf.valido}
                            helperText={erros.cpf.message}
                            onKeyUp={(event) => {
                                setCpf(event.target.value);
                            }}
                            onBlur={validarCampos}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl
                            error={!erros.senha.valido}
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
                                error={!erros.senha.valido}
                                type={senha.showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                onChange={(event) => {
                                    setSenha({
                                        ...senha,
                                        password: event.target.value,
                                    });
                                }}
                                onBlur={validarCampos}
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
                                {erros.senha.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl
                            error={!erros.confSenha.valido}
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
                                error={!erros.confSenha.valido}
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
                                onBlur={validarCampos}
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
                                {erros.confSenha.message}
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
