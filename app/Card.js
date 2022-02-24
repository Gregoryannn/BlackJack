export const WEIGHTS = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
]

export const TYPES = [
    'hearts',
    'spades',
    'diamonds',
    'clubs'
]

export class Card {
    mapTextToSign = {
        hearts: '&hearts;',
        spades: '&spades;',
        diamonds: '&diams;',
        clubs: '&clubs;',
    }

    constructor(weight, type) {
        this.type = type;
        this.weight = weight;
    }

    render() {
        const card = document.createElement('div');
        card.setAttribute('class', `card ${this.type}`);
        card.innerHTML = `${this.weight} ${this.mapTextToSign[this.type]}`;

        return card;
    }
}