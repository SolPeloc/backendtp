//Esta es la instruccion para tomar el id del URL xxx.html?id=<identificador>
const URLid = window.location.search;
const params = new URLSearchParams(URLid);
const id = parseInt(params.get("id"));
console.log(id)

const url = 'http://localhost:8080/productos/';
const input_titulo = document.getElementById("titulo")
const input_tipo = document.getElementById("tipo")
const input_precio = document.getElementById("precio")
const input_imagen = document.getElementById("imagen")
const input_estado = document.getElementById("estado")
const input_descripcion = document.getElementById("descripcion")
const formulario =document.getElementById('form')
const inputs = document.getElementsByClassName("input");

function cargarproducto (){
  if(id){
    fetch(url+id) 
    .then( response => response.json() )
    .then( data =>

        {   //console.log(data)  
          //console.log(data[0].estado) 
          input_titulo.value=data[0].titulo;
            input_tipo.value=data[0].tipo;
            input_precio.value=data[0].precio;
            input_imagen.value=data[0].imagen;
            input_estado.value=data[0].estado;
            input_descripcion.value = data[0].descripcion;     
        } )
    .catch( error => console.log(error))
}

  }
    

cargarproducto()
validar(form)

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
  
  //validacion formulario
function validar(formulario) {
    formulario.addEventListener("submit", (e) => {
      limpiarErrores();
      e.preventDefault();
  
      //validacion titulo
      if (formulario.titulo.value.length == 0) {
        document.getElementById("errorTitulo").innerText = "Campo obligatorio";
        formulario.titulo.classList.add("error_input");
        formulario.titulo.focus();
        return false;
      }

      //Validar Tipo
      if (formulario.tipo.value == "") {
        document.getElementById("errorTipo").innerText =
          "Debe seleccionar un tipo";
        return false;
      }      

       //validar precio
       if (formulario.precio.value == "") {
        document.getElementById("errorPrecio").innerText =
          "Complete el precio";
        formulario.precio.classList.add("error_input");
        formulario.precio.focus();
        return false;
      }    

      //validacion imagen
      if (formulario.imagen.value.length == 0) {
        document.getElementById("errorImagen").innerText = "Campo obligatorio";
        formulario.imagen.classList.add("error_input");
        formulario.imagen.focus();
        return false;
      }

      //Validar Estado
      if (formulario.estado.value == "") {
        document.getElementById("errorEstado").innerText =
          "Debe seleccionar si es o no producto destacado";
        return false;
      }      
  
       //validar Descripcion
       if (formulario.descripcion.value == "") {
        document.getElementById("errorDescripcion").innerText =
          "Complete la descripcion";
        formulario.descripcion.classList.add("error_input");
        formulario.descripcion.focus();
        return false;
      } 
   //guardamos el producto si esta todo OK
      if(id)
        {
          //Modificar
          modificacion_producto();
        }else{
          //Alta
          alta_producto()
        }
      
    });
  }
  


const modificacion_producto=()=>{
    fetch(url+id, {
        method: 'PUT', 
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
            titulo: input_titulo.value,
            tipo: input_tipo.value,
            precio: input_precio.value,
            imagen: input_imagen.value,
            estado: input_estado.value,
            descripcion: input_descripcion.value,
        })
    })
    .then((response) => console.log(response.json()))
    .then((data) => {
      const nuevoProducto = [];
      //agregamos al arreglo la data q creamos
      nuevoProducto.push(data);

      Swal.fire({
        icon: "success",
        title: "Producto modificado con exito",
        showConfirmButton: false,
        timer: 1800,
      })

        .then((response) => (window.location.href = "./tabla_productos.html"))
        .catch((error) => console.log(error));
    });
};

const alta_producto =()=>{
  fetch(url, {
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
      titulo: input_titulo.value,
      tipo: input_tipo.value,
      precio: input_precio.value,
      imagen: input_imagen.value,
      estado: input_estado.value,
      descripcion: input_descripcion.value,

    })
})
.then((response) => console.log(response.json()))
.then((data) => {
  const nuevoProducto = [];
  //agregamos al arreglo la data q creamos
  nuevoProducto.push(data);

  Swal.fire({
    icon: "success",
    title: "Nuevo Producto guardado con exito",
    showConfirmButton: false,
    timer: 1800,
  })

    .then((response) => (window.location.href = "./tabla_productos.html"))
    .catch((error) => console.log(error));
});
};
