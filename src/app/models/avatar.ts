export class Avatar {

    private id: number;
    private name: string;
    private url: string;

    constructor(id: number, name: string, url: string) {
        this.setId(id);
        this.setName(name);
        this.setUrl(url);
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getUrl() { return this.url; }

    setId(value) { this.id = value; }
    setName(value) { this.name = value; }
    setUrl(value) { this.url = value; }
} 