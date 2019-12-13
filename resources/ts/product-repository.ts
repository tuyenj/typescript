import {Product} from "./product";

export class ProductRepository {
    private products: Product[] = [];

    constructor() {
        this.addItem(new Product(5, "Arcu Aliquam Ultrices LLC", 2000, "Lorem ipsum dolor sit amet, consectetuer adipiscing", true, "bulbasaur.png"));
        this.addItem(new Product(2, "Orci Foundation", 1949, "Lorem ipsum dolor sit", true, "charmander.png"));
        this.addItem(new Product(8, "Euismod Ltd", 4252, "Lorem ipsum dolor sit amet, consectetuer", true, "ivysaur.png"));
        this.addItem(new Product(7, "Amet Associates", 3573, "Lorem ipsum dolor sit amet, consectetuer", false, "squirtle.png"));
        this.addItem(new Product(10, "Molestie Pharetra Foundation", 4771, "Lorem ipsum dolor sit amet, consectetuer", false, "venusaur.png"));
    }

    addItem(product: Product): void {
        this.products.push(product);
    }

    getItems(): Product[] {
        return this.products;
    }

    getItemById(id: number): any {
        let filter: Product[] = this.products.filter(product => product.id == id);
        //console.log(filter);
        if (filter.length > 0) return filter[0];
        return null;
    }

    showItemsInHTML(): string {
        let total: number = this.products.length;
        let xhtmlResult: string = "";

        if (total > 0) {
            for (let i = 0; i < total; i++) {
                let currentItem: Product = this.products[i];
                xhtmlResult += `<div class="media product">
                                    <a href="#">
                                        <img class="align-self-start mr-3 img-fluid" src="images/${currentItem.image}" alt="${currentItem.name}">
                                    </a>
                                <div class="media-body">
                                    <h4 class="media-heading">${currentItem.name}</h4>
                                    <p>${currentItem.summary}</p>
                                   ${this.showBuyItemInHTML(currentItem)}
                                </div>
                            </div>`;
            }
        } else {
            xhtmlResult = "Data not exist";
        }
        return xhtmlResult;
    };

    private showBuyItemInHTML(product: Product):string{
        let xhtmlResult = "";
        if (product.canBuy == true){
            xhtmlResult = `<input type="number" name="quantity-product-100" value="1" min="1">
                                    <a data-product ="100" href="#" class="price">$ ${product.price}</a>`
        }else {
            xhtmlResult = `<span data-product ="100" class="price">$ ${product.price}</span>`
        }
        return xhtmlResult;
    }
}
