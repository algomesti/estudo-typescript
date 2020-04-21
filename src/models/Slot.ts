import sizeEnumerate from "../utils/enumarates/size";
import typeOfCardsAllowed from "../utils/enumarates/typeOfCardsAllowed";
import PivoInterfaces from "../utils/interfaces/slot";

namespace PivoModels{

    export class Slot {

        public title: string;
        public size: sizeEnumerate[];
        public typesOfCardsAllowed: typeOfCardsAllowed[];

        constructor(dataSlot: PivoInterfaces.Slot) {

            this.title = dataSlot.title;
            this.size = dataSlot.size;
            this.typesOfCardsAllowed = dataSlot.typesOfCardsAllowed;

        }

    }
}

export default PivoModels.Slot;
