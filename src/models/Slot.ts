import sizeEnumerate from "../utils/enumarates/SizeSlot";
import typeOfCardsAllowed from "../utils/enumarates/TypeOfCardsAllowed";
import PivoInterfaces from "../utils/interfaces/Slot";

const round = {
    opponentAttack: number,
    opponentDefense: number,
    levelAttack: number,
    levelDefense: number
}



namespace PivoModels{

    export class Slot {

        private title: string;
        private size: sizeEnumerate[];
        private typesOfCardsAllowed: typeOfCardsAllowed[];

        constructor(dataSlot: PivoInterfaces.Slot) {

            this.title = dataSlot.title;
            this.size = dataSlot.size;
            this.typesOfCardsAllowed = dataSlot.typesOfCardsAllowed;

        }

        add(card) {

        }

    }
}

export default PivoModels.Slot;
