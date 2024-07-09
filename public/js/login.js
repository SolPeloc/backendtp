const formulario = document.getElementById("form_login");
const inputs = document.getElementsByClassName("input");
const submit = document.getElementById("submit");

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
 //      login()
      //window.location.href = "./tabla_productos.html";
    });
  }
  
  validarForm(formulario);  



/*
  const cambioPanel = () =>{
    panel_login.classList.toggle("invisible");
    panel_registro.classList.toggle("invisible");
  }*/
