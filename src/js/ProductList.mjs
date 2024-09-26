import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=">
        <img src="" alt="Image of ">
        <h3 class="card__brand"></h3>
        <h2 class="card__name"></h2>
        <p class="product-card__price">$</p>
      </a>
    </li>`
  }

export default class ProductListing {
    constructor(category, dataSource, listElement) {
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }

    async fourItems(list) {
        return list.slice(0,4)
    }
    async init() {
      const list = await this.dataSource.getData();
       const fourProduct = this.fourItems(list)
      renderListWithTemplate(productCardTemplate,this.listElement,fourProduct,)
    }
  }