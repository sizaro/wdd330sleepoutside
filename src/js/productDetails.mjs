import { getLocalStorage, setLocalStorage } from "./utils.mjs";


export default class productDetails{
    constructor (productId, datasource){
        this.productId = productId;
        this.product = {};
        this.datasource = datasource;

    }

    async addToCart() {
            let cart = JSON.parse(localStorage.getItem("so-cart")) || []
            cart = Array.isArray(cart) ? cart : []
            cart.push(this.product)
            setLocalStorage("so-cart", cart);
            console.log(JSON.parse(localStorage.getItem("so-cart")))
            const product = await dataSource.findProductById(e.target.dataset.id);
            addProductToCart(product);
          }
          
          

    renderProductDetails() {

    }

    init() {

    }
}