import { Deck } from './Deck.js';
import { Player } from './Player.js';
import { Table } from './Tabel.js';
import { Message } from './Message.js';

class Game {
    constructor({ standButton, hitButton, playerPoints, dealerPoints, player, table, messageBox }) {
        this.hitButton = hitButton;
        this.standButton = standButton;
        this.playerPoints = playerPoints;
        this.dealerPoints = dealerPoints;
        this.player = player;
        this.dealer = new Player('Dealer');
        this.table = table;
        this.deck = new Deck();
        this.deck.shuffle();
        this.messageBox = messageBox;
        this.hitCard = this.hitCard.bind(this);
        this.dealerPlays = this.dealerPlays.bind(this);
    }

    run() {
        this.hitButton.addEventListener('click', this.hitCard)
        this.standButton.addEventListener('click', this.dealerPlays)
        this.dealCards()
    }

    hitCard() {
        let card = this.deck.pickOne();
        this.player.hand.addCard(card);
        ls
        this.table.showPlayerCard(card);
        this.playerPoints.innerHTML = this.player.calculatePlayerPoints();
    }

    dealCards() {
        for (let i = 0; i < 2; i++) {
            let card1 = this.deck.pickOne();
            this.player.hand.addCard(card1);
            this.table.showPlayerCard(card1);

            let card2 = this.deck.pickOne();
            this.dealer.hand.addCard(card2);
            this.table.showDealerCard(card2);
        }
        this.playerPoints.innerHTML = this.player.calculatePlayerPoints();
        this.dealerPoints.innerHTML = this.dealer.calculatePlayerPoints();
    }

    dealerPlays() {
        while (this.dealer.points <= this.player.points && this.dealer.points < 21 && this.player.points <= 21) {
            let card = this.deck.pickOne();
            this.dealer.hand.addCard(card);
            this.table.showDealerCard(card);
            this.dealerPoints.innerHTML = this.dealer.calculatePlayerPoints();
        }

        this.endGame();
    }

    endGame() {
        this.hitButton.removeEventListener('click', this.hitCard)
        this.standButton.removeEventListener('click', this.dealerPlays)

        if (this.playerPoints < 21 && this.dealer.points === this.player.points) {
            this.messageBox.setText('remis').show()
            return
        }

        if (this.dealer.points === this.player.points) {
            this.messageBox.setText('remis').show()
            return
        }

        if (this.player.points > 21) {
            this.messageBox.setText('wygrywa dealer').show()
            return
        }

        if (this.dealer.points > 21) {
            this.messageBox.setText('wygrywa player').show()
            return
        }

        if (this.player.points < this.dealer.points) {
            this.messageBox.setText('wygrywa dealer').show()
            return
        }
    }
}

const player = new Player('Gracz');
const messageBox = new Message(document.getElementById('message'));
const table = new Table(playersCards, dealersCards);
const game = new Game({
    hitButton: document.getElementById('hit'),
    standButton: document.getElementById('stand'),
    playerPoints: document.getElementById('playerPoints'),
    dealerPoints: document.getElementById('dealerPoints'),
    player,
    table,
    messageBox,
});

game.run()