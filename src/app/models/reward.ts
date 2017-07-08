
export class Reward {

	private id: number;
	private name: string;
    private type: boolean; // true single - false familiar


	constructor(id: number, name: string, type: boolean) {
		this.setId(id);
		this.setName(name);
		this.setType(type);
	}

	getId() { return this.id; }
	getName() { return this.name; }
	getType() { return this.type; }

	setId(value) { this.id = value; }
	setName(value) { this.name = value; }
	setType(value) { this.type = value; }

} 