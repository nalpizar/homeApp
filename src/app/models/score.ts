import {Star} from'./star';

export class Score {

	private id: number;
	private star: Star;
    private type: boolean; 


	constructor(id: number, star: Star, type: boolean) {
		this.setId(id);
		this.setType(type);
		this.setStar(star);
	}

	getId() { return this.id; }
	getStar() { return this.star; }
	getType() { return this.type; }

	setId(value) { this.id = value; }
	setStar(value) { this.star= value; }
	setType(value) { this.type = value; }
} 