import {CartItem} from "./cart-item";
import {Product} from "./product";

class Cart {
    private cartItems: CartItem[] = [];

    public addProduct(product: Product, quantity: number = 1): void {
    }

    public updateProduct(product: Product, quantity: number = 1): void {
    }

    removeProduct(product: Product): void {
    }

    public isEmpty(): boolean {
        return true;
    }

    public getTotalPrice(): number {
        return 12;
    }

    public showCartBodyInHTML(): string {
        return "123";
    }

    public showCartFooterInHTML() {
        return "221";
    }
}
