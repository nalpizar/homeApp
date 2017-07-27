import { Task } from './task';
export class Day {

    private id: number;
    private dayName: string;
    private tasks: Task[] = [];

    constructor(id: number, dayName: string) {
        this.setId(id);
        this.setDayName(dayName);

    }

    getId() { return this.id }
    getTasks() { return this.tasks; }
    getDayName() { return this.dayName; }

    setDayName(value) { this.dayName = value; }
    setId(value) { this.id = value; }
    setTasks(value) { this.tasks = value; }

    //Class methods
    addTask(task: Task) {
        this.tasks.push(task);
    }
    deleteTask(index) {
        this.tasks.splice(index, 1);

    }
}
