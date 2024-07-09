const jwt = require('jsonwebtoken')
const jwtconfig = require('./jwtconfig')

module.exports = (req, res, next) => {
	const authHeader = req.headers['authorization']
	if(!authHeader) res.status(403).send({auth: false, message: 'no existe token'})
	const token = authHeader.split(' ')[1]
	if(!token) res.status(403).send({auth: false, message: 'Token errado'})
	jwt.verify(token, jwtconfig.secretKey, (err, decoded) => {
		if (err) return res.status(500).send({auth: false, message: 'Token no autorizado'})
		next()
	})
}