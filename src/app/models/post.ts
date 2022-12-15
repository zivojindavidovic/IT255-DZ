import { Optional } from "@angular/core";

export class Post {
    id: number;
    type: string;
    floor: string;
    price: number;
    constructor(type: string, floor: string, price: number, @Optional() id: number){
        this.type = type;
        this.floor = floor;
        this.price = price;
        this.id = id;
    }
}
