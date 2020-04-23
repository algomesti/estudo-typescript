
import cardType from './Card';

namespace PivoClasses {


    export class Slot {

        card?: cardType.Card;

        getForce(): number {
            return this.card === undefined ? 0 : this.card.getForce();
        }

        add(card: cardType.Card) {
            this.card = card;
        }

        remove() {
            this.card = undefined;
        }

    }
}



export default PivoClasses;