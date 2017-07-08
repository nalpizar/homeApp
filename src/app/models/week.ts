import { Day } from './day';
export class Week {

    private id: number;
    private weekDays: Day[] = [];

    constructor(id: number) {
        this.setId(id);
    }

    getId() { return this.id }
    getWeekDays() { return this.weekDays; }

    setId(value) { this.id = value; }
    setWeekDays(value) { this.weekDays = value; }

    //Class methods
    addWeekDays(day: Day) {
        this.weekDays.push(day);
    }
}
