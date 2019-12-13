export class Product {

    private _id: number;
    private _name: string;
    private _price: number;
    private _summary: string;
    private _canBuy: boolean;
    private _image: string;

    constructor(id: number, name: string, price: number, summary: string, canBuy: boolean = true, image: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._summary = summary;
        this._canBuy = canBuy;
        this._image = image;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get summary(): string {
        return this._summary;
    }

    public set summary(value: string) {
        this._summary = value;
    }

    public get canBuy(): boolean {
        return this._canBuy;
    }

    public set canBuy(value: boolean) {
        this._canBuy = value;
    }

    public get image(): string {
        return this._image;
    }

    public set image(value: string) {
        this._image = value;
    }
}
