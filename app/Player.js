import { Hand } from "./Hand.js";

export class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hand = new Hand();
    }

    calculatePlayerPoints() {
        this.points = this.hand.getStrength();
        return this.points;
    }
}