import card from '../Attack';
import slot from "../../enumarates/SizeSlot";

namespace PivoInterfacesAttack {

    export interface Dagger extends card.Attack {

    }

    export interface DaggerOriginary extends Dagger {

        slots: [];

    }

    export interface DaggerMinor extends Dagger {

        slots: [
            slot.GemSmall,
        ];

    }

    export interface DaggerMedium extends Dagger {

        slots: [
            slot.GemSmall,
            slot.GemSmall,
        ];

    }

    export interface DaggerMajor extends Dagger {

        slots: [
            slot.GemSmall,
            slot.GemSmall,
            slot.GemSmall,
        ];

    }

}



export default PivoInterfacesAttack;