/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá

// const calculatePrice = (productName, productPrice) => {
// 	if(productPrice <= 0 ){
// 		return "Error";
// 	} else if(!productName || !productPrice){
// 		return "ingresar ambos parámetros";
// 	}else if(typeof productName !== 'string'){
// 		return "ingresar un nombre válido";
// 	}
// 	let shippingPrice;
// 	if(productPrice >= 1 && productPrice  <= 2000 ){
// 		shippingPrice = 300;
// 	}else if(productPrice >= 2001 && productPrice <= 4000){
// 		shippingPrice = 500;
// 	}else if(productPrice > 4000){
// 		shippingPrice = 700;
// 	}
// 	return `El producto ${productName} cuesta ${productPrice}. Su costo de envío es de
// 	$${shippingPrice}. Por lo tanto, el precio final es de ${productPrice + shippingPrice}`;
// }

// module.exports = {
// 	calculatePrice,
// };

// const calculateEnvio = (price) => {
//   if (price <= 2000) return 300;
//   if (price >= 2001 && price <= 4000) return 500;
//   if (price > 4000) return 700;
// };
// const calculatePrice = (product, price) => {
//   if (price <= 0) return "Error";
//   if (!product || !price) return "ingresar ambos parámetros";
//   if (typeof product !== "string") return "ingresar un nombre válido";

//   const envio = calculateEnvio(price);
//   const precioFinal = price + envio;
//   return `El producto ${product} cuesta ${price} . Su costo de envío es de ${envio} . Por lo tanto, el precio final es de ${precioFinal}`;
// };

// module.exports = {
//   calculatePrice,
// };
