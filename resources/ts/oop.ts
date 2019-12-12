// class

class Task {
    id: number;
    name: string;
    state: string;

    constructor(id: number, name: string, state: string) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    showTaskInfo() {
        console.log(`${this.id} - ${this.name} -${this.state}`)
    }
}

let taskObj1 = new Task(1, "Typescript", "created");
console.log(taskObj1);
taskObj1.showTaskInfo();

interface TaskInterface {
    id: number;
    name: string;
    state?: string;
}

class TaskService {
    tasks: TaskInterface[];
    constructor(tasks: TaskInterface[]){
        this.tasks = tasks;
    }

    getItems(){
        return this.tasks;
    }
}
let tasks:TaskInterface[] =[
    {id:1, name:"Coding"},
    {id:2, name:"Study"}
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
