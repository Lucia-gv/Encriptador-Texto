
const d = document;
const textArea = d.querySelector(".caja__mensaje");
const imagenMuneco = d.querySelector(".resultado__img");
const resultadoTitle = d.querySelector(".resultado__titlle");
const resultadoTexto = d.querySelector(".resultado__texto");
const botonEncriptar = d.querySelector(".form__boton");
const botonDesencriptar = d.querySelectorAll(".form__boton");
const botonCopiar = d.querySelector(".result__btn");


//Declaramos la variable llaves, como un array que contiene las reglas de encriptación.
const llaves =[
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]

];

//la funcion recibe un "mensaje" como parámetro 
//y lo encripta según las reglas definidas en el array.
function encriptarmensaje(mensaje){
    let mensajeEncriptado = ""; //Declaramos una variable vacía para almacenar el mensaje encriptado.
    for(let i=0; i<mensaje.length; i++){ //Este for externo recorre cada letra del mensaje.
        let letra = mensaje[i]; 
        let encriptada = letra;
        for(let j = 0; j<llaves.length; j++){ //Este for interno rrecorre elemento del array
            if(letra === llaves[j][0]){ //Compara el mensaje ingresado con los elementos del array, para encriptar.
                encriptada = llaves[j][1]; //Reemplaza las vocales por su equivalente
                break; //Termina el bucle interno, una vez encriptado el mensaje. 
            }
        }

        mensajeEncriptado += encriptada; //Actualiza el mensaje agregando la letra encriptada.
    }
    return mensajeEncriptado; //Devuelve el mensaje encriptado.

}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje; //Declaramos la variable mensajeDesencriptado que inicialmente tiene el mismo valor que el mensaje recibido.
    for(let i = 0; i<llaves.length; i++){ //El bucle "for" recorre cada elemento de la lista llaves.
        let regex = new RegExp(llaves[i][1], 'g') //Se crea una expresión regular "new RegExp()" que se utilizará para buscar y 
        //reemplazar los caracteres encriptados dentro del mensaje. 
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]); //Se utiliza el metodo replace() para 
        // reemplazar elemtos que cuentan con un patrón (ej: el "ober" se reemplaza por "o") 
        //de la funcion mensajeDesencriptado y cambiarlo por el primer elemento de las llaves. 
    }
    return mensajeDesencriptado;
}

//ocultar elementos dinamicamente 
textArea.addEventListener("input",(e)=>{ //este codigo: recibe el mensaje que el usuario escribe en el textArea lo captura
    imagenMuneco.style.display = "none";
    resultadoTitle.textContent = "Capturando Mensaje";
    resultadoTexto.textContent = ""; //Lo colocamos como string vacio, para ocultarlo.

}) 

//Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitle.textContent = "El resultado es:";

})

botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitle.textContent = "El resultado es:";

})


botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        resultadoTitle.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoTexto.textContent = " ";

    })

})