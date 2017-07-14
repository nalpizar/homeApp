
export class Reward {

	private id: number;
	private name: string;
	private awardedTo: number; // UserID or Family = 0 == default Null


	constructor(id: number, name: string, awardedTo: number) {
		this.setId(id);
		this.setName(name);
		this.setAwardedTo(awardedTo);
	}

	getId() { return this.id; }
	getName() { return this.name; }
	getAwardedTo() { return this.awardedTo; }

	setId(value) { this.id = value; }
	setName(value) { this.name = value; }
	setAwardedTo(value) { this.awardedTo = value; }

} 