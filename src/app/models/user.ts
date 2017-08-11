import { Avatar } from './avatar';
import { Skin } from './skin';

export class User {

    private id: number;
    private name: string;
    private age: number;
    private type: string; //admin or family
    private avatarId: number;
    private skinId: string;

    constructor(id: number, name: string, age: number, type: string, avatarId: number) {
        this.setId(id);
        this.setName(name);
        this.setAge(age);
        this.setAvatar(avatarId);
        this.setType(type);
    }

    getId() { return this.id }
    getName() { return this.name }
    getAge() { return this.age }
    getAvatar() { return this.avatarId }
    getSkin() { return this.skinId }
    getType() { return this.type }

    setId(value) { this.id = value; }
    setName(value) { this.name = value; }
    setAge(value) { this.age = value; }
    setAvatar(value) { this.avatarId = value; }
    setSkin(value) { this.skinId = value; }
    setType(value) { this.type = value; }

}