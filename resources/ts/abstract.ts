console.log("abstract");

abstract class Laptop {
    public keyboard(): void {
        console.log("Laptop.keyboard");
    }

    public mainboard(): void {
        console.log("Latop.keyboard");
    }

    public chipset(): void {
        console.log("Laptop.chipset");
    }

    public abstract ram(): void;
}

class LaptopDell extends Laptop {
    // overwrite method
    public keyboard(): void {
        console.log("LaptopDell.keyboard");
    }

    public ram(): void {
        console.log("Laptop.ram");
    }
}

let laptopObj: LaptopDell = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard();
laptopObj.chipset();
laptopObj.ram();
