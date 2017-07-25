import {Star} from'./star';

export class Score {

	private id: number;
	private stars: Star[] = [];

	constructor(id: number) {
		this.setId(id);
	}

	getId() { return this.id; }
	getStars() { return this.stars; }

	setId(value) { this.id = value; }
	setStars(value) { this.stars= value; }

	//Class methods
    addStar(star: Star) {
        this.stars.push(star);
    }
} 