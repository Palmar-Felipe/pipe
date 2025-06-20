
/*en esta seccion declaramos variables*/ 
const nombre = document.getElementById("name");
const numberInput = document.getElementById("number");
const enviar = document.getElementById("answer");
const boton = document.getElementById("enviar");

/*al hacer click en enviar se cumplen estas condiciones  */
boton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el formulario se recargue
    
    const numberValor = numberInput.value;
    const nombreValor = nombre.value;
    
    if (numberValor === "") {
        enviar.textContent = "El campo no puede estar vacío.";
        return;
    }
   
    // Validar número válido y mayor a cero
    if (isNaN(number)) {
        enviar.textContent = "Por favor ingresa un número válido.";
        return;
    }

    if (number <= 0) {
        enviar.textContent = "Por favor ingresa un número mayor a cero.";
        return;
    }

    
    if (number < 18) {
        enviar.textContent = `Hola ${nombreValor}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;    
    } else if (number >= 18) {
        enviar.textContent = `Hola ${nombreValor}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    } 

  

});


