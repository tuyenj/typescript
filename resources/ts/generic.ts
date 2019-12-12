console.log("Generic");

// Generic for method
class StudyGeneric {
    static printArray<T>(params: T[]): void {
        console.log(params);
    }
}

StudyGeneric.printArray<number>([1, 2, 3, 4]);
StudyGeneric.printArray<string>(["number 1", "number 2", "number 3"]);
StudyGeneric.printArray<any>([1, 2, 3, "String ok"]);

// Generic for class
class Product<A, B, C> {
    id: A;
    name: B;
    price: C;

    constructor(id: A, name: B, price: C) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showProductDetail() {
        console.log(`Product detail :\nID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}`);
    }
}

let product = new Product<string, string, number>("001", "Car", 100000);
product.showProductDetail();

let product2 = new Product<number, string, number>(99, "Toyota", 2333);
product2.showProductDetail();
