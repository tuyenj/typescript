interface People {
    name: string;

    eat(): void;

    sleep(): void;
}

class Superman implements People {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name} eat pizza`);
    }

    sleep(): void {
        console.log(`${this.name} sleep`);
    }
}

let supperManOne = new Superman("David");
supperManOne.eat();
supperManOne.sleep();

