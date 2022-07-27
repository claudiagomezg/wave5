const express = require("express");
const router = express.Router();

/************************************************************* 
	EJERCICIO 
	1-Crear un endpoint que utilice el método GET y 
	devuelva como respuesta el mensaje “¡Hola mundo!”. 
	2-Probar que el mensaje llega al navegador.
	http://localhost:3000/api/
 ************************************************************/
// Tu código acá

// app.get('/', (req, res)=>{
// 	res.send('¡Hola mundo!');
// });

router.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

// http://localhost:3000/api

// app.listen(3000,() => {
// 	console.log('Servidor corriendo');
// });

/*************************************************************
	EXTRA
	1-Crear un array de productos usando la variable products
	2-Crear otro método Get cuya ruta sea '/products'
	3-Responder con el array al ingresar a '/products'
	http://localhost:3000/api/products
 *************************************************************/
// Tu código acá

let products = [
	{id:1, name: 'a', price: 200},
	{id:2, name: 'b', price: 300},
	{id:3, name: 'c', price: 400},
];

router.get(('/products'), (req, res) => {
	res.send({products});
});

//expressjs.com/es/starter/hello-world.html
module.exports = { router, products };

// Código suh clase 1 express

// npm init
// npm install express
// ejecutar: node "nombrearchivo.js"

// const express = require("express");
// const app = express();
// const PORT = 8843;

// app.get("/", (req, res) => {
//   const { url, method } = req;
//   console.log("la url es: " + url + "; mi method: " + method);
//   res.send("HOLA PIPUL");
// });

// app.listen(PORT, (req, res) => {
//   console.log("server up " + PORT);
// });

// app.get("/products", (req, res) => {
//   const { url, method } = req;
//   console.log("la url es: " + url + "; mi method: " + method);
//   res.send("PRODUCTOS");
// });

// app.get("/error", (req, res) => {
//   const { url, method } = req;
//   console.log("la url es: " + url + "; mi method: " + method);
//   res.send("ha ocurrido un error 404 :c");
// });

// app.get("*", (req, res) => {
//   const { url, method } = req;
//   console.log("la url es: " + url + "; mi method: " + method);
//   res.redirect("/error");
// });