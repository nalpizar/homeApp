import { Day } from './day';
export class Week {

    private id: number;
    private days: Day[] = [];

    constructor(id: number) {
        this.setId(id);
    }

    getId() { return this.id }
    getWeekDays() { return this.days; }

    setId(value) { this.id = value; }
    setWeekDays(value) { this.days = value; }

    //Class methods
    addWeekDays(day: Day) {
        this.days.push(day);
    }
}
