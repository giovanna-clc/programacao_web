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
    if (cpf = "") {
        alert("Campo CPF não pode ser vazio");
            return false;
    }
    return true;
}