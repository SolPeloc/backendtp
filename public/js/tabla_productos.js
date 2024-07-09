const contenedor = document.querySelector('tbody')
let resultados = ''
const url = 'http://localhost:8080/productos/'


const cargarDatos =()=>{
    fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error))
}
cargarDatos();


//txt ingresa datos
txtBuscar.addEventListener('keyup', (e)=>{
    console.log(e.target.value)
    contenedor.innerHTML = ""
    let txt = e.target.value.trim();
    if(txt=="")
    {
       console.log("esta vacio")
      cargarDatos()
    }
    else{
      fetchBuscar(txt)
    }   
  })
  
  //mostrar datos
  const mostrar=(datos)=>{
    if(datos.length >0)
    {
    datos.forEach(registro => {
        contenedor.innerHTML += `<tr>
        <td>${registro.id}</td>
        <td>${registro.titulo}</td>
        <td>${registro.tipo}</td>
        <td>${registro.precio}</td>
        <td>
        <a class="btnEditar btn btn-primary me-1" href="../pages/productos_editar.html?id=${registro.id}"></a>
        <a class="btnBorrar btn btn-danger me-1" href="#" "></a>
        </td>
           
   </tr>
`    

    })
}else{
     //sino trajo datos da vacia la busqueda

     busquedaVacia()
}

  }
  //fetch busqueda
  const fetchBuscar = (txt) =>{
    
      let urlB = 'http://localhost:8080/productos/'
      fetch(urlB+txt)
      .then( response => response.json() )
      .then( data => mostrar(data))
      .catch( error => console.log(error))
  }
  
  //error si no existe la busqueda, muestra esto....
  const busquedaVacia = () =>{
      resultados += `
      <div class='sin_registros'>NO EXISTEN REGISTROS</div>
  `
  contenedor.innerHTML = resultados
  }

  const on = (element, event, selector, handler) => {
    //console.log(element)  //todo el documento captura 
    //console.log(event)  //event pasa el evento clic q lo definimos en ON
    //console.log(selector) // selector captura la clase del btn a usar
    //console.log(handler)  //handler es un controlador jeecuta evento... acciones del usuario
    //muestra el handler lo q libera o dentro de la funcion eliminar...
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){  //closet devuelve el mas cercano o asendiente al elemento actual sino devuelve null
            handler(e)
        }
    })
} 

  //Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
    let url = 'http://localhost:8080/productos/'
    //captura un parentNode todo donde esta el btn clicliado
    //al usar 2 parentNode captura toda la fila completa donde esta el btn click presionado
     const fila = e.target.parentNode.parentNode
     //primer elemento de la fila q es el id...
     const id = fila.firstElementChild.innerHTML
     console.log(id)
    /    Swal.fire({
        title: 'Estas esta seguro  que desea eliminar el producto seleccionado?',
        //text: "Si se elimina No se puede recuperar!",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: 'btn btn-primary',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Borrar'
      }).then((result) => {
        if (result.isConfirmed) {
            //pasamos la url+id a borrar
        //va al metodo de nuestra api delete...

       fetch(url+id, {
            method: 'DELETE'
        })

       .then(data =>
       Swal.fire({ 
        icon: 'success',
        title: 'El registro se elimino correctamente',
        showConfirmButton: false,
        timer: 1100
    }) )
    .then( response => location.reload() )
    .catch(error => console.log(error))//, window.location.href = "./index.html" )
}
      })
})
  