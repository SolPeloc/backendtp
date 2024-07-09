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

//USUARIOS
const getUsuarios = (req,res) =>{
	const sql = 'SELECT * FROM usuarios';
	db.query(sql, (err, result)=>{
		if(err) throw err;
		res.json(result);
	});
};

const deleteUsuario = (req,res) =>{

	db.query('DELETE FROM usuarios WHERE id =?', req.params.id,function(err, results){
		if(err) throw err;
		res.json({message:'Usuario Eliminado'});
	});
};

module.exports = {
	getProductos,
	getProductoById,
	createProducto,
	updateProducto,
    deleteProducto,
	buscar_producto,
	getUsuarios,
	deleteUsuario
};