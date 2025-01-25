const formulario = document.getElementById("contactForm");
formulario.addEventListener("submit", manipuladorDeEnvio);
function  manipuladorDeEnvio(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    console.log(nome)

const Sobrename = document.getElementById("Sobrename").value;
console.log(Sobrename)

const Numero = document.getElementById("numero").value;
console.log(Numero)

const email = document.getElementById("email").value;
console.log(email)
const sexo = document.querySelector("input[name='sexo']:checked").value;
console.log("sexo: ", sexo);
}