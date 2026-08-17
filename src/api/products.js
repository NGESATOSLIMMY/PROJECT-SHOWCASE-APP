import * as live from "./products.live.js";
import * as mock from "./products.mock.js";

const api = import.meta.env.PROD ? mock : live;

export const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = api;
