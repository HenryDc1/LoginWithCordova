var users = {};
users['Henry'] = '123';
function checklogin(){
    const nameUser=document.getElementById('nameid').value;
    const passwordUser=document.getElementById('passid').value;
    if (users.hasOwnProperty(nameUser)) {
        // Verificar si la contraseña coincide
        if (users[nameUser] === passwordUser) {
            alert('Login correcto');
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Nombre de usuario no encontrado');
    }
}
function newRecord() {
    const newName = document.getElementById('signameid').value;
    const newPassword = document.getElementById('newpassid').value;
    const repeatPassword = document.getElementById('repitpassid').value;

    if (newPassword !== repeatPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Verificar si el nombre de usuario ya está registrado
    if (users.hasOwnProperty(newName)) {
        alert('El nombre de usuario ya está registrado');
    } else {
        // Registrar nuevo usuario
        users[newName] = newPassword;
        alert('Registro exitoso');
        console.log(users);
    }
    if (newName.trim() === '' || newPassword.trim() === '' || repeatPassword.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }
}
