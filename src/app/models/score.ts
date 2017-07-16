import {Star} from'./star';

export class Score {

	private id: number;
	private stars: Star[] = [];

	constructor(id: number, stars:Star[]) {
		this.setId(id);
		this.setStars(stars);
	}

	getId() { return this.id; }
	getStars() { return this.stars; }

	setId(value) { this.id = value; }
	setStars(value) { this.stars= value; }
} 