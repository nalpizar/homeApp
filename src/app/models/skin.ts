export class Skin {

    private id: number;
    private skinName: string;
    private colorName: string;

    constructor(id: number, skinName: string, colorName: string) {
        this.setId(id);
        this.setSkinName(skinName);
        this.setColorName(colorName);
    }

    getId() { return this.id }
    getSkinName(){return this.skinName}
    getsetColorName() { return this.colorName }

    setId(value) { this.id = value; }
    setSkinName(value){this.skinName=value}
    setColorName(value) { this.colorName = value; }

}
