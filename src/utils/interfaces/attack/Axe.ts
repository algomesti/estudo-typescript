import card from '../Attack';
import slot from "../../enumarates/SizeSlot";

namespace PivoInterfacesAttack {

    export interface Axe extends card.Attack {

    }

    export interface AxeOriginary extends Axe {

        slots: [];

    }

    export interface AxeMinor extends Axe {

        slots: [
            slot.GemSmall,
        ];

    }

    export interface AxeMedium extends Axe {

        slots: [
            slot.GemSmall,
            slot.GemMedium,
            slot.GemMedium,
        ];

    }

    export interface AxeMajor extends Axe {

        slots: [
            slot.GemSmall,
            slot.GemMedium,
            slot.GemMedium,
            slot.GemSmall,
            slot.GemSmall,
        ];

    }

    export interface AxeSupreme extends Axe {

        slots: [
            slot.GemSmall,
            slot.GemMedium,
            slot.GemMedium,
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
        ];

    }



}



export default PivoInterfacesAttack;