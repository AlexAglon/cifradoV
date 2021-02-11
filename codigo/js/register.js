
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

    //lo agregamos a nuestro arreglo
    usuarios.push(usuario);
}


/*boton*/
const register_btn = document.getElementById('register-B');
register_btn.addEventListener("click",AgregaUsuario);