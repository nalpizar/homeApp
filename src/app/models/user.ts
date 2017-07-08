import { Week } from './week';
import { Avatar} from './avatar';
export class User {

    private id: number;
    private name: string;
    private age: number;
    private avatar: Avatar;
    private currentWeek: Week;

    constructor(id: number, name: string, age:number, avatar:Avatar, currentWeek: Week) {
        this.setId(id);
        this.setName(name);
        this.setAge(age);
        this.setAvatar(avatar);
        this.setCurrentWeek(currentWeek);
    }

    getId() { return this.id }
    getName(){return this.name}
    getAge() { return this.age }
    getAvatar() { return this.avatar }
    getCurrentWeek() { return this.currentWeek }

    setId(value) { this.id = value; }
    setName(value) { this.id = value; }
    setAge(value) { this.age = value; }
    setAvatar(value) { this.avatar = value; }
    setCurrentWeek(value) { this.currentWeek = value; }

}