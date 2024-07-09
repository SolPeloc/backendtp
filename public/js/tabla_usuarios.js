const contenedor = document.querySelector('tbody')
let resultados = ''
const url_user = 'http://localhost:8080/usuarios/'


const cargarDatos =()=>{
    fetch(url_user)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error))
}
cargarDatos();


  
  //mostrar datos
  const mostrar=(datos)=>{
    if(datos.length >0)
    {
    datos.forEach(registro => {
        contenedor.innerHTML += `<tr>
        <td>${registro.id}</td>
        <td>${registro.nombre}</td>
        <td>${registro.usuario}</td>
        <td>
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
 
  
  //error si no existe la busqueda, muestra esto....
  const busquedaVacia = () =>{
      resultados += `
      <div class='sin_registros'>NO EXISTEN REGISTROS</div>
  `
  contenedor.innerHTML = resultados
  }

  const on = (element, event, selector, handler) => {

    element.addEventListener(event, e => {
        if(e.target.closest(selector)){  //closet devuelve el mas cercano o asendiente al elemento actual sino devuelve null
            handler(e)
        }
    })
} 

  //Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
   // let url = 'http://localhost:8080/productos/'
    //captura un parentNode todo donde esta el btn clicliado
    //al usar 2 parentNode captura toda la fila completa donde esta el btn click presionado
     const fila = e.target.parentNode.parentNode
     //primer elemento de la fila q es el id...
     const id = fila.firstElementChild.innerHTML
     console.log(id)
    /    Swal.fire({
        title: 'Estas esta seguro  que desea eliminar el usuario seleccionado?',
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

       fetch(url_user+id, {
            method: 'DELETE'
        })

       .then(data =>
       Swal.fire({ 
        icon: 'success',
        title: 'Usuario elimino correctamente',
        showConfirmButton: false,
        timer: 1100
    }) )
    .then( response => location.reload() )
    .catch(error => console.log(error))//, window.location.href = "./index.html" )
}
      })
})
  