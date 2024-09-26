import { getLocalStorage, setLocalStorage, getParams } from "./utils.mjs";

// Import ProductData class for handling product information
import ProductData from "./ProductData.mjs";

//Import ProductDetails class for holding the product details
import ProductData from "./ProductData.mjs";
import productDetails from "./productDetails.mjs";


// Create a new instance of ProductData for tents
const dataSource = new ProductData("tents");

//get the productId from the url
const productId = getParams("product")
console.log( dataSource.findProductById(productId))

//create a new instance of ProductDetails for a tent
const product = new productDetails(productId, dataSource)

product.init();