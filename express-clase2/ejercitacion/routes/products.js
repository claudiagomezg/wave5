let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,

router.get('/products', (req, res) => {
    res.json(products);
});

//2. Obtener un producto específico mediante su ID “/api/products/:id”
router.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const results = products.find((product) => product.id === parseInt(id));
    res.json([results]);
});

// router.get('/products/:id?', (req, res) =>{
//      const {id} = req=params;
//     // const id= req.params.id;S
//     console.log('----> id',id);
//     res.json(products.id);
// });

//3. Agregar un nuevo producto “/api/products”
router.post('/products/add',(req,res) => {
    const name = req.body.name;
    const colors = req.body.colors;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const obj = {name, colors, price, quantity};
    // console.log(obj);

    products.push(obj)
    res.send(`El producto ${name} se agregó.`)

});

//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,

router.put("/products/:id/:name", (req, res) => {
    const { id, name } = req.params;
    const result = products.find((product) => product.id === parseInt(id));
    result.name = name;
    res.send(result);
  });

//5. Eliminar un producto mediante su ID “/api/products/:id”,
router.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const result = products.map((product) => product.id === parseInt(id));
    res.send(result);
});

module.exports = { router, products };
