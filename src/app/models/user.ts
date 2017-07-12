import { Avatar } from './avatar';
import { Reward } from './reward';

export class User {

    private id: number;
    private name: string;
    private age: number;
    private avatar: Avatar;
    private rewardId: null;

    constructor(id: number, name: string, age: number) {
        this.setId(id);
        this.setName(name);
        this.setAge(age);
    }

    getId() { return this.id }
    getName() { return this.name }
    getAge() { return this.age }
    getAvatar() { return this.avatar }
    getRewardId() { return this.rewardId }

    setId(value) { this.id = value; }
    setName(value) { this.id = value; }
    setAge(value) { this.age = value; }
    setAvatar(value) { this.avatar = value; }
    setRewardId(value) { this.rewardId = value; }
}