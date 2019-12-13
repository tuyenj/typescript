import {Product} from "./product";

export class CartItem {
    private product: Product;
    private quantiy:number;

    constructor(product: Product, quantity:number = 1) {
        this.product = product;
        this.quantiy = quantity;
    }

    public showCartItemInHTML(): string{
        return "HTML"
    }

    getSubtotal():number{
        return 10;
    }

}
