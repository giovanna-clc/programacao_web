let dom = document;

let titulo = document. getElementById ("titulo").value;
let nome = document. getElementById ("nome");

console.log (titulo);

function submeter () {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;

    console.log (cpf);
    console.log(validaCPF(cpf));
}

function validaCPF(cpf) {
    if (cpf == "") {
        alert("Campo CPF não pode ser vazio");
        return false;
    }
    cpf = cpf.trim();                                           //Para retirar os espaços que o usuário pode colocar

    if(/[a-zA-Z]/.test(cpf)) {
        //console.log("Contém letras"); //Aviso que contém letras para mim no console do chrome
        alert ("CPF não pode conter letras");
        return false;
    }

    if (!/^[\d.-]+$/.test(cpf)) {                               // \d é o equivalente a [0-9], ^início $fim de texto +uma ou mais vezes !se não for... (é um caracter de negação)
        alert ("O CPF só pode conter números, '.' ou '-'");     //verificar se é composto somente de números. "." ou "-"
        return false;
    }

    return true;
}