const mysql = require('mysql2')

const pool = mysql.createPool({
	host: 'sql10.freesqldatabase.com',
	user: 'sql10718023',
	password: 'PVdFXXGNVw',
	database: 'sql10718023',
	port: 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
})

module.exports = pool
/* {

	//conn: pool.promise()
}*/