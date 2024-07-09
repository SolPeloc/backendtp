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

router.get('/usuarios', controladores.getUsuarios);
router.delete('/usuarios/:id', controladores.deleteUsuario);
module.exports = router