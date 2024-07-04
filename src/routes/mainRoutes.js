const express = require('express')
const router = express.Router()
const controladores = require(`../controllers/mainController`)
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: (req, file, cb) =>{cb(null, `../ecommerce/assets/images/${req.body.tipo}`)}, //`public/img/`)},
	filename: (req, file, cb) =>{cb(null, Date.now() + "_" + file.originalname)}
})

const uploadFile = multer({storage})

 
router.get('/productos', controladores.getProductos);
router.get('/productos/:id', controladores.buscar_producto);
router.get('/productos/:id',controladores.getProductoById);
router.post('/productos/',controladores.createProducto);
router.put('/productos/:id',controladores.updateProducto);
router.delete('/productos/:id', controladores.deleteProducto);
/*
router.post('/productos/',uploadFile.single('campoFormulario'),controladores.createProducto);
/*
router.delete('/productos/:id', controladores.deleteProducto)
router.post('/productos',controladores.createProducto)
router.put('/productos/:id',controladores.updateProducto)
router.get('/productos/buscar', controladores.buscar_producto)
/*
router.get("/listado", controladores.getListado)
router.post('/listado', uploadFile.single('archivo'), controladores.crearRegistro)
router.get('/modificar/:num', controladores.getModificar)
router.patch('/modificar', controladores.actualizar)
router.delete('/listado', controladores.eliminar)
*/
module.exports = router