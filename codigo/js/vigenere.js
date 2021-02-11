let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const L = alfabeto.length; 

let usuarios = [
    {
        nombre: "karla",
        lastname: "Mendez",
        username:"KarlaK2799",
        password:"123456",
        mensajes:[]
    }
];

localStorage.setItem("arrUsuarios",JSON.stringify(usuarios));



/*------------------------------------------------------------------------------------- */
/*FUNCION PARA QUITAR ESPACIOS*/
function quitaEspacios(mensaje){
    mensaje = mensaje.toUpperCase();
    let mensajeSinESpacio = "";
    for (letra of mensaje){
        if (letra !== " ") {
            mensajeSinESpacio = mensajeSinESpacio + letra;
        }
    }

    return mensajeSinESpacio;
}

/*emparejamiento de mensaje - llave*/
function repiteLlave(mensajeSinESpacio,llave) {
    let llaveE = "";
    while (llaveE.length != mensajeSinESpacio.length) {
        for (let letra of llave) {
            if (llaveE.length != mensajeSinESpacio.length) {
                llaveE = llaveE + letra;
            }
        }
    }
    return llaveE;
  }

/*encriptado*/
/*Se usa la formula (Xi+Ci) mod L */


function Vigenere(mensajeSinESpacio,llaveE) {
    let mensajeEncriptado = "",posicion = 0;
    for (let index in mensajeSinESpacio) {
        let X = alfabeto.indexOf(mensajeSinESpacio[index]);
        let C = alfabeto.indexOf(llaveE[index]);
        posicion = (X+C)%L;
        mensajeEncriptado = mensajeEncriptado+alfabeto[posicion];
    }

    return mensajeEncriptado;

}

let mensajeEncriptado = Vigenere("PARIS","LOUPL");
usuarios[0].mensajes.push(mensajeEncriptado)

let mensajeEncriptado2 = Vigenere("PARISVAUTBIENUNEMESSE","LOUPLOUPLOUPLOUPLOUPL ");
usuarios[0].mensajes.push(mensajeEncriptado2.toUpperCase())

//console.log(usuarios);




/*------------------------------------------------------------ */

function guardaLS(usuario){
    //recibimos el localstorage
    let array = localStorage.getItem("arrUsuarios");
    array = JSON.parse(array);

    //agregamos el usuario a nuestro arreglo
    array.push(usuario);
    //guardamos los cambios en el local storage
    localStorage.setItem("arrUsuarios",JSON.stringify(array));
}


function impremeLS() {
    let aux = localStorage.getItem("arrUsuarios");
    aux = JSON.parse(aux);

    console.log(aux);
}

/*Funcion que nos ayudara a agregar un usuario a nuestra lista de usuarios */
function AgregaUsuario(){
    // //obtenemos la informacion del formulario 
    // let name = document.getElementById('name-f').value;
    // let lastn = document.getElementById('lastname-f').value;
    // let usern = document.getElementById('username').value;
    // let password = document.getElementById('passw').value;


    // //Agregamos a info a un objeto de usuarios 
    // let usuario = {
    //     nombre: name,
    //     lastname: lastn,
    //     username:usern,
    //     password:password,
    //     mensajes:[]
    // };    

    // guardaLS(usuario);
    console.log("se ejecuto la funcion");

}



/*boton y funcion cuando apretemos el boton
const registerB = document.getElementById('register-B');
registerB.addEventListener("click",AgregaUsuario);*/










 