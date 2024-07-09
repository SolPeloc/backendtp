const  db  = require('../db/dbconnect')
const jwt = require("jsonwebtoken");
//const crypt = require("bcryptjs");
const bcrypt = require('bcrypt');
const jwtconfig = require("../config/jwtconfig.js");

/*
  const crearRegistro = async (req, res) => {
    const { nombre,user, password } = req.body;
    console.log(nombre,user,password)
    const encriptado = await bcrypt.hash(password, 8);
    console.log(nombre,user,encriptado)
    const sql = 'INSERT INTO usuarios (nombre,usuario,password) VALUES (?,?,?)';
    db.query(sql,
      [nombre,user,encriptado], (err, result)=>{
    
    if(err) throw err;
		res.json({message: "Usuario creado",usuarioId: result.insertId});
	});
};

const login = async (req, res) => {
    const { user, password } = req.body;
    const valido = db.query(
      `SELECT * FROM usuarios WHERE user = ?`,
      user
    );
    console.log(valido)
    if (valido === undefined) {
      res.status(404).send("Usuario no encontrado");
    } else if (!(await  bcrypt.compare(password, valido.password))) {
      res.status(401).send({ auth: false, token: null });
    } else {
      const token = jwt.sign({ id: valido.id }, jwtconfig.secretKey, {
        expiresIn: jwtconfig.tokenExpiresIn,
      });
      res.status(201).send({ auth: true, token });
    }
  }

  module.exports = {
    crearRegistro,
    login
};*/

module.exports= {
	crearRegistro: async (req, res) =>{
		const {nombre,user, password} = req.body
   //     console.log(nombre,user,password)
		const encriptado = await bcrypt.hash(password, 8)
    //    console.log(nombre,user,encriptado)
    const sql = 'INSERT INTO usuarios (nombre,usuario,password) VALUES (?,?,?)';
    db.query(sql,
      [nombre,user,encriptado], (err, result)=>{
    
    if(err) throw err;
		res.json({message: "Usuario creado",usuarioId: result.insertId});
	});
},/*
	login: async (req, res) =>{
		const {user, password} = req.body
        const sql = 'SELECT * FROM productos where user = ?';
	    db.query(sql,[user], (err, result)=>{
		const valido =  db.query(sql,[user])
        console.log(valido)// db.query(`SELECT * FROM usuarios WHERE user = ?`, user)
		if(valido === undefined){
			res.status(404).send('Usuario no encontrado')
		} else if(!(bcrypt.compare(password, valido.password))){
			res.status(401).send({auth: false, token: null})
		} else {
			const token = jwt.sign({id: valido.id}, jwtconfig.secretKey, {expiresIn: jwtconfig.tokenExpiresIn})
			//req.session.userID = valido.id
			res.status(201).send({auth: true, token})
		}
    })
	},*/
}