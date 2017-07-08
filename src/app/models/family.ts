import { User } from './user';

export class Family {

    private id: number;
    private members: User[]=[];
    private weekHistory = [];

    constructor(id: number) {
        this.setId(id);
    }

    getId() { return this.id; }
    getMembers() { return this.members; }

    setId(value) { this.id = value; }


    //Class methods

    addMembers(user: User) {
        this.members.push(user);
    }

    storePastWeek() {
        this.weekHistory.push(this.members);
    }

    getPastWeek(index){
        return this.weekHistory[index-1];
    }

}