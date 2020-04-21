import card from '../Attack';
import slot from "../../enumarates/SizeSlot";

namespace PivoInterfacesAttack {

    export interface Sword extends card.Attack {

    }

    export interface SwordOriginary extends Sword {

        slots: [];

    }

    export interface SwordMinor extends Sword {

        slots: [
            slot.GemSmall,
        ];

    }

    export interface SwordMedium extends Sword {

        slots: [
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
        ];

    }

    export interface SwordMajor extends Sword {

        slots: [
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
        ];

    }

    export interface SwordSupreme extends Sword {

        slots: [
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
            slot.GemMedium,
            slot.GemMedium,
        ];

    }

}



export default PivoInterfacesAttack;