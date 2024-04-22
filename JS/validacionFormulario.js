function validacion() {
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  var email = document.getElementById("correo").value;
  var opcionesGenero = document.getElementsByName("seleccionGenero");
  var seleccionado = false;

  if (email.length < 1) {
    alert("[ERROR] Debes de poner un correo valido");
    return false;
  }

  if (password !== password2) {
    alert("[ERROR] El campo debe tener la misma contraseña");
    return false;
  }

  if (password.length < 5) {
    alert("[ERROR] La contraseña debe tener más de 5 caracteres");
    return false;
  }

  for (var i = 0; i < opcionesGenero.length; i++) {
    if (opcionesGenero[i].checked) {
      seleccionado = true;
      break;
    } 
  } 
     if (!seleccionado) {
      alert("[ERROR] Selecciona un genero");
      return false;
    }

  return true;
}
