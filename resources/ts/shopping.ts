import {ProductRepository} from "./product-repository";
import {Product} from "./product";

let productRepository = new ProductRepository();
let product: string = productRepository.showItemsInHTML();
$("#list-product").html(product);
