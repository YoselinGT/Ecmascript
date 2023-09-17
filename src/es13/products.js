import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const productos = await response.json();

export {productos}