import { User } from './user';
import { Score } from './score';


export class Task {

	private id: number;
	private name: string;
	private position: number;
	private weight: number;
	status: number; //0=default - 1=started - 2=completed - 3=onHurry - 4=swaped
	private swapedTo: number;
	private score: Score;
	private userId: number;




	constructor(id: number, name: string, position: number, weight: number, status: number, swapedTo: number, score: Score, userId: number) {
		this.setId(id);
		this.setName(name);
		this.setPosition(position);
		this.setWeight(weight);
		this.setStatus(status);
		this.setSwapedTo(swapedTo);
		this.setScore(score);
		this.setUserId(userId);

	}

	getId() { return this.id; }
	getName() { return this.name; }
	getPosition() { return this.position; }
	getWeight() { return this.weight; }
	getStatus() { return this.status; }
	getSwapedTo() { return this.swapedTo; }
	getScore() { return this.score; }
	getUserId() { return this.userId; }


	setId(value) { this.id = value; }
	setName(value) { this.name = value; }
	setPosition(value) { this.position = value; }
	setWeight(value) { this.weight = value; }
	setStatus(value) { this.status = value; }
	setSwapedTo(value) { this.swapedTo = value; }
	setScore(value) { this.score = value; }
	setUserId(value) { this.userId = value; }


} 