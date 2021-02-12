
//funcion para mostrar todos los mensajes al usuario
function muestraMensajes() {
    //sacamos el contador del local storage
    let contador = localStorage.getItem("cont");
    contador = JSON.parse(contador);

    //sacamos los datos de nuestro local storage 
    let arr = localStorage.getItem("arrUsuarios");
    arr = JSON.parse(arr);

    let usuario = arr[contador];

    for (let mensaje of usuario.mensajes) {
        let contM = document.getElementById("cont-msj");
        let card = document.createElement("div");
        card.setAttribute("class","card");

        card.append(mensaje);
        contM.append(card);
    }

}


//funcion para agregar mensajes
function agregaMensajes() {
     //sacamos el contador del local storage
     let contador = localStorage.getItem("cont");
     contador = JSON.parse(contador);

    //sacamos los datos de nuestro local storage 
    let arr = localStorage.getItem("arrUsuarios");
    arr = JSON.parse(arr);

    //recibimos el mensaje que introdujo el usuario
    let mensaje = document.getElementById("msj-container").value;

    //aplicamos algoritmo de encriptado y agregamos el mensaje al local storage
    let msjsE = quitaEspacios(mensaje);
    let llaveR = repiteLlave(msjsE,llave);
    let mensajeE = Vigenere(msjsE,llaveR);
    arr[contador].mensajes.push(mensajeE);

    localStorage.setItem("arrUsuarios",JSON.stringify(arr));
    location.reload();
}


function decifrarMensaje(){
    let contador = localStorage.getItem("cont");
    contador = JSON.parse(contador);

    //sacamos los datos de nuestro local storage 
    let arr = localStorage.getItem("arrUsuarios");
    arr = JSON.parse(arr);

    let usuario = arr[contador];
    
    // Limpiamos el contenedor de los mensajes
    let contenedorMensajes = document.getElementById("cont-msj");
    let br = document.createElement("br");
    let elementos = contenedorMensajes.children;
    for(children of elementos){
        contenedorMensajes.replaceChild(br,children)
    }

    
    // Verificar contraseña
    let verifyPassword = prompt("Confirma tu contraseña");
    if (verifyPassword === usuario.password){
        for (let mensaje of usuario.mensajes) {
            let llaveE = repiteLlave(mensaje, llave);
            mensaje = desencriptaVigenere(mensaje, llaveE)        
            let contM = document.getElementById("cont-msj");
            let card = document.createElement("div");
            card.setAttribute("class","card");
    
            card.append(mensaje);
            contM.append(card);
        }   
    } 

    // Si la contraseña es incorrecta recarga la pagina y lanza una alerta
    else{
        location.reload()
        alert("Ingresaste una contraseña incorrecta")
    }
}



muestraMensajes();
