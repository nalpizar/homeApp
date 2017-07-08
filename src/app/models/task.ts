import { User } from './user';
import { Score } from './score';
import {Reward} from'./reward';


export class Task {

	private id: number;
	private name: string;
    private hour: Date;
    private reminder: Date;
    private weight: number;
    private started: boolean;
    private completed: boolean;
    private onHurry:boolean;
    private swaped:boolean;
    private swapedTo: User;
    private score: Score;
    private reward: Reward;


	constructor(id: number, name: string, hour: Date, reminder:Date, weight: number, started: boolean, completed:boolean, onHurry: boolean, swaped: boolean, swapedTo: User, score: Score, reward: Reward) {
		this.setId(id);
		this.setName(name);
		this.setHour(hour);
        this.setReminder(reminder);
        this.setWeight(weight);
        this.setStarted(started);
        this.setCompleted(completed);
        this.setOnHurry(onHurry);
        this.setSwaped(swaped);
        this.setSwapedTo(swapedTo);
        this.setScore(score);
        this.setReward(reward);
	}

	getId() { return this.id; }
	getName() { return this.name; }
	getHour() { return this.hour; }
	getReminder() { return this.reminder; }
	getWeight() { return this.weight; }
	getStarted() { return this.started; }
	getCompleted() { return this.completed; }
	getOnHurry() { return this.onHurry; }
	getSwaped() { return this.swaped; }
	getSwapedTo() { return this.swapedTo; }
	getScore() { return this.score; }
	getReward() { return this.reward; }

	setId(value) { this.id = value; }
	setName(value) { this.name = value; }
	setHour(value) { this.hour = value; }
	setReminder(value) { this.reminder = value; }
	setWeight(value) { this.weight = value; }
	setStarted(value) { this.started = value; }
	setCompleted(value) { this.completed = value; }
	setOnHurry(value) { this.onHurry = value; }
	setSwaped(value) { this.swaped = value; }
	setSwapedTo(value) { this.swapedTo = value; }
	setScore(value) { this.score = value; }
    setReward(value) { this.reward= value; }

} 