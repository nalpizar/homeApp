
export class TaskRep {

    private id: number;
    private name: string;
    private weight: number;


    constructor(id: number, name: string, weight: number) {
        this.setId(id);
        this.setName(name);
        this.setWeight(weight);
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getWeight() { return this.weight; }


    setId(value) { this.id = value; }
    setName(value) { this.name = value; }
    setWeight(value) { this.weight = value; }


} 