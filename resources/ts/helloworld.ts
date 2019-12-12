// variable string
let domain: string = "tdev.com";
console.log(domain);

// Boolean
let isDone: boolean = false;
console.log(isDone);

// Number
let decimal: number = 12;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// kieu array
let students: string[] = ['A', 'B', 'C'];

// khai bao theo kieu gan kieu
let students2: Array<string> = ['D', 'E', 'F'];
console.log(students);
console.log(students2);

// kieu du lieu enum
enum fruit {
    Orange = 12, Banana = 12, Mango, Apple
};
let a: fruit = fruit.Orange;
console.log('Fruit Orange:', a);

// Arrow Function
let calculateSalary = function () {
    return 1000;
}
console.log('Salary is ', calculateSalary());

let calculateSalaryArrow = () => 1000000;
console.log('Arrow Function is', calculateSalaryArrow());

// Function
function userInfo(name: string, age: number): string {
    return `My name is ${name} and age is ${age}`;
}

console.log(userInfo("John", 20));

// function tham so mac dinh
function userInfo1(name: string, age: number = 18): string {
    return `My name is ${name} and age is ${age}`;
}

console.log(userInfo1("John"));

// Tham so khuyet
function userInfo2(name: string, age?: number): string {
    if (age == null) {
        return `My name is ${name}`;
    } else {
        return `My name is ${name} and age is ${age}`;
    }
}

console.log(userInfo2("John"));

// total length
function totalLength(): number {
    return 10;
}

// Rest parameter
function showInfo(name: string, ...course: string[]): string {
    return `${name} study ${course.join(", ")}`;
}

console.log(showInfo("David", "Java", "PHP", "C++"));

// function arrow
let f1 = function (i: number): number {
    return i * i;
}
console.log(f1(2));

let f3 = (i: number) => {
    return i * i
};
console.log(f3(4));

/**
 * overload
 */
function funcABC(x: string): number {
    return 100;
}

funcABC("TestABC")

