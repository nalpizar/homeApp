export class Star {

	private id: number;
    private status: boolean;

	constructor(id: number, status: boolean) {
		this.setId(id);
		this.setStatus(status);
	}

	getId() { return this.id; }
	getStatus() { return this.status; }

	setId(value) { this.id = value; }
	setStatus(value) { this.status = value; }
} 