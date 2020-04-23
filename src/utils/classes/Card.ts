
import slot from './Slot';

namespace PivoClasses {

    export class Card {
        force: number;
        slot: slot = new slot();

        getForce(): number {
            return this.force + this.slot.getForce();
        }

        add(card:Card): boolean {
            this.slot.add(card);
            return true;
        }

        remove(card:Card) : boolean {
            this.slot.remove(card);
            return true;
        }

        constructor (force: number) {
            this.force = force;
        }



    }
}



export default PivoClasses.Card;