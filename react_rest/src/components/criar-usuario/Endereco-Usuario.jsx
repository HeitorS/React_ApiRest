import {
    ArrowCircleLeftRounded,
    ArrowCircleRightRounded,
    LocationOn,
} from "@mui/icons-material";
import {
    Box,
    Container,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import ValidacoesCadastro from "../helpers/contexts/ValidacoesCadastro";
import useValidated from "../helpers/hooks/useValidated";
import { InputCepSearch } from "../helpers/inputs/inputMask";

export default function EnderecoUsuario(aoEnviar, aoVoltar) {
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, camposValidos] = useValidated(validacoes);

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    let endereco;

    useEffect(() => {
        console.log(endereco);
        if (endereco !== undefined) {
            setLogradouro(endereco.logradouro);
            console.log(logradouro);
        }
    }, [logradouro]);

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
                            `https://viacep.com.br/ws/${cep}/json/`
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
                        aoEnviar({ endereco: { cep, logradouro } });
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
                        <InputCepSearch
                            id="cep"
                            name="cep"
                            label="CEP"
                            onKeyUp={(event) => {
                                setCep(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="logradouro"
                            name="logradouro"
                            label="Logradouro"
                            value={logradouro}
                            onChange={(event) => {
                                setLogradouro(event.target.value);
                            }}
                            fullWidth
                            variant="standard"
                        />
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
