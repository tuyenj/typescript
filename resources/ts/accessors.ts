class Course {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    showCourseInfo(): void {
        console.log(`${this._name}`);
    }

    public get name(): string {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
    }
}

let courseObj = new Course("TypeScript");
console.log(courseObj);
console.log("Name :", courseObj.name);
courseObj.name = "Training Typescript";
console.log("Name :", courseObj.name);
