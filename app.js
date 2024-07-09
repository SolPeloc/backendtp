/* ***SERVER ESTÁTICO CON EXPRESS (Módulo Externo)*** */
const express = require(`express`)
const override = require('method-override')
const rutas = require('./src/routes/mainRoutes.js')
var cors = require('cors');  //npm install cors
const rutasLogin = require("./src/routes/loginRoutes.js");
const app = express()

const port = 8080 || process.env.PORT || 3000

//app.set('view engine', 'ejs')
//app.set('views', (__dirname + '/src/views')) 
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
//utilizar JSON
app.use(express.json());
app.use(cors());
//app.use(override('_metodo'))

app.use('/', rutas)
app.use("/login", rutasLogin);

app.use((req, res, next) =>{
	res.status(404).send(`<h1 style="color: red">Recurso no encontrado!</h1>`)
})

app.listen(port, () => console.log(`arriba en el puerto: ${port}`))
