/*Todos los juegos*/
let section_juego = document.querySelector("#container-main");
const url_juegos = 'http://localhost:8080/productos/'

let cargarJuegos = () => {
  fetch(url_juegos)
    .then((respuesta) => respuesta.json()) //formato en q se obtiene la info osea la respuesta
    .then((data) => {
      let porTitulos = {};
    
    //  console.log(data) 
      //obtengo section del data
      data.map((element) => {
     //   console.log(element.tipo) 
        porTitulos[element.tipo] = element.tipo;
    //    console.log(porTitulos[element.tipo])
      });
       
      //recorro el titulo que obtuve
      for (let clave in porTitulos) {
        console.log(clave)
        //agregamos el titulo al div reserva
        section_juego.appendChild(crearTitulo(clave));

        //uso data-name para cada section - titulo
        let div_contenedor = document.querySelector(
          `[data-name ="${clave}"]`
        );

        //recorro todo el data y si es igual al titulo lo inserto dentro
        data.filter((elemento) => {
          if (elemento.tipo === clave) {
            console.log(elemento.id)
            // console.log(clave)
            let linea = crearLineaNueva(
              elemento.tipo,
              elemento.id,
              elemento.titulo,
              elemento.descripcion,
              elemento.precio,
              elemento.imagen
            );
            div_contenedor.appendChild(linea);
          }
        });
     }
    })
    .catch((err) => console.log(error)); //si hay error lo atajamos y mostramos x consola
};

cargarJuegos();

const crearLineaNueva = (tipo,id,titulo,descripcion,precio,imagen) => {
  let div_item = document.createElement("div");
  div_item.classList.add("item");

  div_item.innerHTML += `
                         <div class="product-card">
                         <img src="./../images/${tipo}/${imagen}.png" alt="${titulo}" class="product-img">
                         <i class="fa-regular fa-heart add-cart"></i>
                         <div class="text-area">
                         <h3 class="product-title">${titulo}</h3>
                         </div> 
                        <p class="mt-3">${descripcion}.</p>
                        <span class="price">$${precio}</span>
                        <span class="btn-card"><a href="#" >Agregar a carrito</a></span>
                        </div>
                   <div class="item">
                </div>`;
 //  <a href="./pages/Reserva.html?destino=${ciudad}&cant_dias=${cant_dias}">Reserva</a>
  return div_item;
};

const crearTitulo = (titulo) => {
  //creo x cada titulo el div
  let div_titulo = document.createElement("div");

  div_titulo.innerHTML = "";
  div_titulo.innerHTML += `
  <h2 id="${titulo}" class="title">Juegos para ${titulo}</h2>
 <section class="container-card" data-name="${titulo}">
 </section>`;

  return div_titulo;
};