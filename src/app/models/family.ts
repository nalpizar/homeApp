import { User } from './user';
import { Reward } from './reward';
import { Week } from './week';

export class Family {

    private id: number;
    private rewardId: null;
    private members: User[] = [];
    private weekId: number;

    constructor(id: number, ) {
        this.setId(id);
    }

    getId() { return this.id; }
    getRewardId() { return this.rewardId; }
    getMembers() { return this.members; }
    getWeekId() { return this.weekId; }

    setId(value) { this.id = value; }
    setRewardId(value) { this.rewardId = value; }
    setMembers(value) { this.members = value; }
    setWeekId(value) { this.weekId = value; }

    //Class methods
    public addMembers(user: User) {
        this.members.push(user);
    }
}