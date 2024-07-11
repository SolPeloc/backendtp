const mysql = require('mysql2')

const pool = mysql.createPool({
	host: 'sql10.freesqldatabase.com',
	user: 'sql10719301',
	password: 'dshDECt8pt',
	database: 'sql10719301',
	port: 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
})

module.exports = pool
/* {

	//conn: pool.promise()
}*/
