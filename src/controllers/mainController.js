const  db  = require('../db/dbconnect')

const getProductos = (req,res) =>{
	const sql = 'SELECT * FROM productos';
	db.query(sql, (err, result)=>{
		if(err) throw err;
		res.json(result);
	});
};

const getProductoById = (req,res) =>{
	const {id} = req.params;
	const sql = 'SELECT * FROM productos where id = ?';
	db.query(sql,[id], (err, result)=>{
		if(err) throw err;
		res.json(result);
	});
};

const createProducto = (req,res) =>{
	const {titulo,descripcion,tipo,precio,estado,imagen} = req.body;
	const sql = 'INSERT INTO productos (titulo,descripcion,tipo,precio,estado,imagen) VALUES (?,?,?,?,?,?)';
	db.query(sql,[titulo,descripcion,tipo,precio,estado,imagen], (err, result)=>{
		if(err) throw err;
		res.json({message: "Producto creado",productoId: result.insertId});
	});
};

const updateProducto = (req,res) =>{
	const {id} = req.params;
	const {titulo,descripcion,tipo,precio,estado,imagen} = req.body;
	const sql = 'UPDATE productos SET titulo=?,descripcion=?,tipo=?,precio=?,estado=?,imagen=? WHERE id = ?';
	db.query(sql,[titulo,descripcion,tipo,precio,estado,imagen,id], (err, result)=>{
		if(err) throw err;
		res.json({message: "Producto actualizado"});
	});
};

const deleteProducto = (req,res) =>{

	db.query('DELETE FROM productos WHERE id =?', req.params.id,function(err, results){
		if(err) throw err;
		res.json({message:'Producto Eliminado'});
	});
};

	//para buscar  
const buscar_producto=  (req, res)=>{
		
	   const txtB = req.params.id
	   const buscar = "SELECT * FROM productos where (id LIKE '%"+ txtB + "%' OR titulo LIKE '%" + txtB + "%' OR tipo LIKE '%" + txtB + "%')";

		  
	  db.query(buscar,(error,item)=>{
	 if(error){ //si detecta error, captura y muestra
			   throw error;
		   }else{
				res.send(item); //ENVIAMOS mje con send las filas son todos los datos
			  //podemos traer un solo valor del item encontrado
			  // res.send(fila[0].descripcion) 
		   }
		
	   })
}



module.exports = {
	getProductos,
	getProductoById,
	createProducto,
	updateProducto,
    deleteProducto,
	buscar_producto
};
/*
	getJuegos: async (req, res) => {
		try{
			const [ registros ] = await conn.query(`SELECT * FROM juegos`)
			res.json(registros)
		} catch (error) {
			throw error 
		} finally{
			conn.releaseConnection()
		}
	},
	const eliminar = (req, res)=>{
		const {id} = req.params;
		const sql = conn.query(`DELETE FROM juegos WHERE id=?`);

		//res.redirect('/productos.html')
		//res.send(`<h2>Se hizo algo con ${req.body.eliminar} en el delete</h2><a href="/dinamic/1">Regresar a la página anterior</a>`)
	}, 
	//para buscar  
//Mostrar todos los clientes encontrados
//app.get('/api/clientes/buscar/:id', (req,res)=>{
	buscar_juego: async (req, res)=>{
	//const habilitado =1;
   const txtB = req.params.id
   const buscar = await conn.query("SELECT * FROM juegos where (id LIKE '%"+ txtB + "%' OR titulo LIKE '%" + txtB + "%' OR tipo LIKE '%" + txtB + "%')");
 //  conexion.query('SELECT * FROM clientes where dni LIKE ?', [req.params.id], (error,item)=>{
	  
  conn.buscar(query,(error,item)=>{
 if(error){ //si detecta error, captura y muestra
		   throw error;
	   }else{
			res.send(item); //ENVIAMOS mje con send las filas son todos los datos
		  //podemos traer un solo valor del item encontrado
		  // res.send(fila[0].descripcion) 
	   }
	
   })
}//)
/*
	crearRegistro: async (req, res)=>{
		//console.log(req.file)
		const sql = `INSERT INTO Items (nombre, precio, descrip) VALUES (?,?,?);`
		const creado = await conn.query(sql, [req.body.item, parseFloat(req.body.precio), req.file.filename])
		//console.log(creado)
		res.redirect('/listado.html')
		/*console.log(req.body)
		res.send(`<h2>Se hizo algo con ${req.body.create} en el create</h2><a href="/dinamic/1">Regresar a la página anterior</a>`)
		res.json(req.body.create)*/
	/*},

	getModificar: async (req, res) =>{
		const [modificar] = await conn.query(`SELECT * FROM Items WHERE id=?`, req.params.num)
		console.log(modificar)
		res.render('modificar', {
			title: 'Modifico',
			registro: modificar[0]
		})
	},

	actualizar: async (req, res)=>{
		const sql = `UPDATE Items SET nombre = ?, precio = ?, descrip = ? WHERE id = ?`
		const {idActualizar, nombre_actualizar, precio, descripcion} = req.body
		const modificado = await conn.query(sql, [nombre_actualizar, precio, descripcion, idActualizar])
		console.log(modificado)
		res.redirect('/listado.html')
		//res.send(`<h2>Se hizo algo con ${req.body.actualizar} en el update</h2><a href="/dinamic/1">Regresar a la página anterior</a>`)
	},

	eliminar: async (req, res)=>{
		const eliminado = await conn.query(`DELETE FROM Items WHERE id=?`, req.body.idEliminar)
		res.redirect('/listado.html')
		//res.send(`<h2>Se hizo algo con ${req.body.eliminar} en el delete</h2><a href="/dinamic/1">Regresar a la página anterior</a>`)
	},
*/