

const nombre = document.getElementById("name");
const numberInput = document.getElementById("number");
const enviar = document.getElementById("answer");
const boton = document.getElementById("enviar");

boton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el formulario se recargue

    const number = Number(numberInput.value);
    const nombreValor = nombre.value;

    if (number < 18) {
        enviar.textContent = `Hola ${nombreValor}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;    
    } else if (number >= 18) {
        enviar.textContent = `Hola ${nombreValor}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    }
});


