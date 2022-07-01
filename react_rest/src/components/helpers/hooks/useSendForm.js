

export default function useSendForm(tipo) {
    function formCadastro(dados) {
        console.log("Todos os meus dados estão aqui", dados)
    }

    if (tipo === "cadastro") {
        return [formCadastro] 
    }
}