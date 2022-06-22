import {
    ArrowCircleLeftRounded,
    ArrowCircleRightRounded,
    LocationOn,
    Search,
} from "@mui/icons-material";
import {
    Box,
    Container,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../helpers/contexts/ValidacoesCadastro";
import useListMunicipios from "../helpers/hooks/useListMunicipios";
import useValidated from "../helpers/hooks/useValidated";
import { InputMaskCep } from "../helpers/inputs/inputMask";

export default function EnderecoUsuario(aoEnviar, aoVoltar) {

    const handleKeyUpCep = InputMaskCep();
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, camposValidos] = useValidated(validacoes);
    const [estados, cidades] = useListMunicipios();

    const [endereco, setEndereco] = useState({
        cep: "",
        logradouro: "",
        bairro: "",
        estado: "SP",
        cidade: "",
    });

    return (
        <Container className="contentEnd">
            <LocationOn className="infoEnd" />
            <Typography variant="h6" component="h1" align="center">
                Endereço Pessoal
            </Typography>
            <Box
                onSubmit={(event) => {
                    event.preventDefault();
                    if (
                        event.nativeEvent.submitter.classList.contains(
                            "btnSearch"
                        )
                    ) {
                        let request = new XMLHttpRequest();
                        request.open(
                            "GET",
                            `https://viacep.com.br/ws/${endereco.cep}/json/`
                        );
                        request.send();
                        request.onload = () => {
                            endereco = JSON.parse(request.response);
                        };
                    } else if (
                        event.nativeEvent.submitter.classList.contains(
                            "btnAvancar"
                        )
                    ) {
                        aoEnviar({ endereco: endereco });
                    } else {
                        aoVoltar();
                    }
                }}
                id="endUsuario"
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1 },
                }}
                autoComplete="true"
                noValidate
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField
                            id="cep"
                            name="cep"
                            label="CEP"
                            value={endereco.cep}
                            onChange={(event) => {
                                setEndereco({
                                    ...endereco,
                                    cep: event.target.value,
                                });
                                
                            }}
                            onKeyDown={handleKeyUpCep}
                            fullWidth
                            variant="standard"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            aria-label="search cep"
                                            className="btnSearch"
                                            type="submit"
                                        >
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="logradouro"
                            name="logradouro"
                            label="Logradouro"
                            value={endereco.logradouro}
                            onChange={(event) => {
                                setEndereco({
                                    ...endereco,
                                    logradouro: event.target.value,
                                });
                            }}
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <TextField
                            id="bairro"
                            name="bairro"
                            label="Bairro"
                            value={endereco.bairro}
                            onChange={(event) => {
                                setEndereco({
                                    ...endereco,
                                    bairro: event.target.value,
                                });
                            }}
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl fullWidth variant="standard" sx={{ m: 1 }}>
                            <InputLabel id="estado-label">Estado</InputLabel>
                            <Select
                                id="estado"
                                labelId="estado-label"
                                value={endereco.estado}
                                onChange={(event) => {
                                    setEndereco({
                                        ...endereco,
                                        estado: event.target.value,
                                    });
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {estados.map((est, key) => {
                                    return (
                                        <MenuItem key={key} value={est}>{est}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl fullWidth variant="standard" sx={{ m: 1 }}>
                            <InputLabel id="cidade-label">Cidade</InputLabel>
                            <Select
                                id="cidade"
                                labelId="cidade-label"
                                label="Cidade"
                                value={endereco.cidade}
                                onChange={(event) => {
                                    setEndereco({
                                        ...endereco,
                                        cidade: event.target.value,
                                    });
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {cidades[endereco.estado].map((cid, key) => {
                                    return (
                                        <MenuItem key={key} value={cid}>{cid}</MenuItem>
                                    );
                                })}
                            </Select>
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
