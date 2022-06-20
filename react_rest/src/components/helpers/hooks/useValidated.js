import { useState } from 'react';

export default function useValidated(validacoes) {
    const [erros, setErros] = useState(mountState(validacoes));

    function validarCampos(event) {
        const { name, value } = event.target;
        const newState = { ...erros };
        if (name === "confSenha") {
            let senha =
                document.getElementById("senha").value;
            newState[name] = validacoes[name](senha, value);
        } else {
            newState[name] = validacoes[name](value);
        }
        setErros(newState);
    }

    function camposValidos() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampos, camposValidos]

}

function mountState(validacoes) {
    let state = {};
    for (let campo in validacoes) {
        state[campo] = { valido: true, mensagem: "" };
    }
    return state;
}