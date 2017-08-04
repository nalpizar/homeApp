import { User } from './user';
import { Reward } from './reward';
import { TaskRep } from './taskRep';
import { Week } from './week';

export class Family {

    private idFamily: number;
    private members: User[] = [];
    private taskRepository: TaskRep[] = [];
    private week: Week[] = [];
    private rewards: Reward[] = [];

    constructor(idFamily: number) {
        this.setId(idFamily);
    }

    getId() { return this.idFamily; }
    getMembers() { return this.members; }
    getTaskRep() { return this.taskRepository; }
    getDays() { return this.week[0].getWeekDays(); }
    getWeek() { return this.week; }
    getRewards() { return this.rewards; }


    setId(value) { this.idFamily = value; }
    setMembers(value) { this.members = value; }
    setTaskRep(value) { this.taskRepository = value; }

    //Class methods
    public addMembers(member: User) { this.members.push(member) };
    public addTaskRep(taskRep: TaskRep) { this.taskRepository.push(taskRep) };
    public addWeek(week: Week) { this.week.push(week) };
    public addRewards(reward: Reward) { this.rewards.push(reward) };

}