const url_juegos = 'http://localhost:8080/productos/'
let resultados = ''
const contenedorDestacado = document.querySelector('.shop-content')

const mostrarDestacados = ()=>{
    //Procedimiento Mostrar
    fetch(url_juegos)
        .then( response => response.json() )
        .then( data =>{
            console.log(data)
            mostrar(data)
        }  ) 
        .catch( error => console.log(error))
    }
    mostrarDestacados()
  
  
      //funcion para mostrar los resultados
  const mostrar = (juegos) => {
      resultados ="";
  
          juegos.forEach(juego=> {
        
               if(juego.estado == 'Destacado')
               {
               // <div class="product-box">
               
               resultados +=   `  
               <div class="product-card">
                <img src="./images/${juego.tipo}/${juego.imagen}.png" alt="" class="product-img">
                <i class="fa-regular fa-heart add-cart"></i>
                <i class="discount"><span>-50%</span></i>
                <div class="text-area">
                    <h2 class="product-title">${juego.titulo}</h2>
                    <span class="price">$${juego.precio}</span>
                     <span class="btn-card"><a href="#" >Agregar a carrito</a></span>
                </div>
            </div>
            `
               }
         })
          contenedorDestacado.innerHTML = resultados
        }


