const formulario = document.getElementById("form_login");
const inputs = document.getElementsByClassName("input");
const submit = document.getElementById("submit");
const panel_login = document.getElementById("panel_login");
const panel_registro = document.querySelector("panel_registro")
const url_user = 'http://localhost:8080/login/registro/';
const input_nombre = document.getElementById("nombre")
const input_user = document.getElementById("user")
const input_password = document.getElementById("password")

//LOGIN
//limpiar Formulario
function limpiarErrores() {
    //guardo en var errores todos los elementos de clase error
    var errores = document.getElementsByClassName("error");
    //limpiamos
    for (var i = 0; i < errores.length; i++) {
      errores[i].innerHTML = "";
    }
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("error_input");
    }
  }
  
  function limpiarTxt() {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }







  //validacion formulario comentario
  function validarForm(formulario) {
    formulario.addEventListener("submit", (e) => {
      limpiarErrores();
      e.preventDefault();

        //validacion nombre
        if (formulario.nombre.value.length == 0) {
          document.getElementById("errorNombre").innerText = "Campo obligatorio";
          formulario.nombre.classList.add("error_input");
          formulario.nombre.focus();
          return false;
        }
  
      //validacion User
      if (formulario.user.value.length == 0) {
        document.getElementById("errorUser").innerText = "Campo obligatorio";
        formulario.user.classList.add("error_input");
        formulario.user.focus();
        return false;
      }
  
      //validacion Pass
      if (formulario.password.value.length == 0) {
        document.getElementById("errorPassword").innerText = "Campo obligatorio";
        formulario.password.classList.add("error_input");
        formulario.password.focus();
        return false;
      }
      //validacion Pass
      if (formulario.password.value.length <8) {
        document.getElementById("errorPassword").innerText = "Minimo 8 caracteres";
        formulario.password.classList.add("error_input");
        console.log(formulario.password.value.length);
        formulario.password.focus();
        return false;
      }
      /*Swal.fire({
        icon: "success",
        title: "Login Exitoso",
        showConfirmButton: false,
        timer: 2000,
      })*/
      //limpiarTxt();
     alta_usuario();
     console.log(input_password.value)
     console.log(typeof(input_password.value))
      //window.location.href = "./tabla_productos.html";
    });
  }
  
  validarForm(formulario);  

  const alta_usuario =()=>{
    fetch(url_user, {
      method:'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nombre: input_nombre.value,
        user: input_user.value,
        password: input_password.value,
      })
  })
  .then((response) => console.log(response.json()))
  .then((data) => {
    const nuevoUsuario = [];
    //agregamos al arreglo la data q creamos
    nuevoUsuario.push(data);
  
    Swal.fire({
      icon: "success",
      title: "Nuevo Usuario creado con exito",
      showConfirmButton: false,
      timer: 1800,
    })
  
      .then((response) => (window.location.href = "./login.html"))
      .catch((error) => console.log(error));
  });
  };
  

/*
  const alta_usuario =()=>{
    fetch(url, {
      method:'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify({
       nombre: input_nombre.value,
        user: input_user.value,
        password: input_password.value,
      })
  })
  .then((response) => console.log(response.json()))
  .then((data) => {
    const nuevoUsuario = [];
    //agregamos al arreglo la data q creamos
    nuevoUsuario.push(data);
  
    Swal.fire({
      icon: "success",
      title: "Nuevo Usuario Creado con exito",
      showConfirmButton: false,
      timer: 1800,
    })
  
      .then((response) => (window.location.href = "./login.html"))
      .catch((error) => console.log(error));
  });
  };
*/