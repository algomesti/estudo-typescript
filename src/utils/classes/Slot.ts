
import slot from './oldSlot';
import card from './Card';

namespace PivoClasses {

    export class Slot {

        slotContainer: card[];

        getForce(): number {
            let total = 0;
            this.slotContainer.forEach( (card: card) => {
                total = total+ card.getForce();
            });
            return total;
        }

        add(card: card) : boolean {
            this.slotContainer.push(card);
            return true;
        }

        remove(cardToRemove: card) : boolean {
            let cardTemp :card[] = [];
            this.slotContainer.forEach( (card: card) => {
                if(card != cardToRemove) {
                    cardTemp.push(card);
                    card.remove(cardToRemove);
                }
            });
            this.slotContainer = cardTemp;

            return true;
        }

        constructor () {
            this.slotContainer = [];
        }
    }
}



export default PivoClasses.Slot;