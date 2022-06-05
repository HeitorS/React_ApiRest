// Validação de CPF
export function validaCPF(cpf) {
    if (cpf !== undefined && cpf.length < 11) {
        return { valido: false, message: "Cpf deve ter pelo menos 11 números" }
    } else if (cpf !== undefined && cpf.length > 14) {
        return { valido: false, message: "Cpf deve ter menos 14 caracteres" }
    } else {
        if (!validarNumerosCPF(cpf)) {
            return { valido: false, message: "O cpf informado é inválido. Por favor verificar os dígitos." }
        } else {
            return { valido: true, message: "" }
        }
    }
}

function validarNumerosCPF(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
    cpf = cpf.replaceAll(".", "").replaceAll("/", "").replaceAll("-", "");
    if (cpf === "00000000000") return false;
    if (cpf === "11111111111") return false;
    if (cpf === "22222222222") return false;
    if (cpf === "33333333333") return false;
    if (cpf === "44444444444") return false;
    if (cpf === "55555555555") return false;
    if (cpf === "66666666666") return false;
    if (cpf === "77777777777") return false;
    if (cpf === "88888888888") return false;
    if (cpf === "99999999999") return false;


    for (let i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
    }

    if (Resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    Soma = 0;
    for (let i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
    }
    if (Resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

// Validação de Nome
export function validaNome(nome) {
    if (nome !== undefined && nome.length < 3) {
        return { valido: false, message: "Nome tem que ter mais de 3 caracteres" }
    } else if (nome !== undefined && nome.length > 100) {
        return { valido: false, message: "Nome tem que ter menos de 100 caracteres" }
    } else {
        return { valido: true, message: "" }
    }
}

// Validação de e-mail
export function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        return { valido: false, message: "E-mail inválido" }
    } else {
        return { valido: true, message: "" }
    }
}

// Validação de senha
export function validaSenha(senha) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ %*()+=?]).{8,18}$/;
    if (!regex.test(senha)) {
        return { valido: false, message: "A senha deve conter entre 8 à 18 caracteres, uma letra minúscula, uma letra maiúscula e um caracter especial '!@#&_'." }
    } else {
        return { valido: true, message: "" }
    }
}

export function validaConfSenha(senha, confSenha) {
    if (senha !== confSenha) {
        return { valido: false, message: "Confirmação de senha é diferente da senha informada" }
    } else {
        return { valido: true, message: "" }
    }
}