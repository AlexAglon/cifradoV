let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const llave = "ZURA";
const L = alfabeto.length; 

//verificamos si ya existe nuestro arreglo en el local storage
if (localStorage.getItem("arrUsuarios")) {
    console.log("");
}else{
    let usuarios = [];
    localStorage.setItem("arrUsuarios",JSON.stringify(usuarios));
}


/*---------------------------------funcines de algoritmo de encriptado---------------------------------------------------- */
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
    console.log(llave);
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

/*desencriptado*/
function desencriptaVigenere(mensajeEncriptado,llaveE) {
    let mensajeDesencriptado = "",posicion = 0;
    for (let index in mensajeEncriptado) {
        let X = alfabeto.indexOf(mensajeEncriptado[index]);
        let C = alfabeto.indexOf(llaveE[index]);
        if((X-C) >= 0){
            posicion = (X-C)%L;
            mensajeDesencriptado = mensajeDesencriptado+alfabeto[posicion];    
        }else{
            posicion = (X-C+L)%L;
            mensajeDesencriptado = mensajeDesencriptado+alfabeto[posicion];
        }
    }
    console.log(mensajeDesencriptado);
    return mensajeDesencriptado;

}



/*------------------------------------------------------------ */

function guardaLS(usuario){
    //recibimos el localstorage
    let array = localStorage.getItem("arrUsuarios");
    array = JSON.parse(array);
    
    //bandera para indicaros si existe el usuario
    let flag = false;
    //nombre del usuario que queremos agregar
    let usrn = usuario.username;

    //recorremos todo nuestro arreglo en busca del usuario
    for (let us of array) {
        if (us.username === usrn) {
            flag = true;//el usuario existe
        }
    }

    //para ver si agregamos o no
    //si existe el usuario
    if (flag === true) {
        alert("El nombre de usuario ya existe");
        location.reload();
    }else{
        //agregamos el usuario a nuestro arreglo
        array.push(usuario);
        //guardamos los cambios en el local storage
        localStorage.setItem("arrUsuarios",JSON.stringify(array));

        alert("usuario registrado con exito seras redirigido a la pantalla de inicio de sesion");
        location.assign("inicioS.html");
    }
    
}


function impremeLS() {
    let aux = localStorage.getItem("arrUsuarios");
    aux = JSON.parse(aux);

    console.log(aux);
}


/*Funcion que nos ayudara a agregar un usuario a nuestra lista de usuarios */
function AgregaUsuario(){
    //obtenemos la informacion del formulario 
    let name = document.getElementById('name-f').value;
    let lastn = document.getElementById('lastname-f').value;
    let usern = document.getElementById('username').value;
    let password = document.getElementById('passw').value;


    //Agregamos a info a un objeto de usuarios 
    let usuario = {
        nombre: name,
        lastname: lastn,
        username:usern,
        password:password,
        mensajes:[]
    };    

    guardaLS(usuario);
    
    
}


/*funcion para validar si existe el usuario y la contraseña dada*/
function verificarUsuario(){
    //recibimos los datos introducidos por el usuario
    let user = document.getElementById('userN').value;
    let password = document.getElementById('passw').value;
    let contador = 0;//el contador nos ayudara a saber que usuario es el que logguea en caso de que exista

    //sacamos los datos de nuestro local storage 
    let arr = localStorage.getItem("arrUsuarios");
    arr = JSON.parse(arr);

    //si nuestro usuario y contraseña existe nos logeara y redirigira a la pantalla de usuario
    for (let usuario of arr) {
        if(user === usuario.username && password === usuario.password ){
            console.log("usuario logeado");
            //funcion para redirigir a la pagina de usuario
            location.assign("../html/usuarios.html");
            localStorage.setItem("cont",contador);
        }
        contador ++;
    }
}
 








 