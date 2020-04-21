import card from '../Attack';
import slot from "../../enumarates/SizeSlot";

namespace PivoInterfacesAttack {

    export interface Hammer extends card.Attack {

    }

    export interface HammerOriginary extends Hammer {

        slots: [];

    }

    export interface HammerMinor extends Hammer {

        slots: [
            slot.GemSmall,
        ];

    }

    export interface HammerMedium extends Hammer {

        slots: [
            slot.GemSmall,
            slot.GemMedium,
            slot.GemMedium,
        ];

    }

    export interface HammerMajor extends Hammer {

        slots: [
            slot.GemSmall,
            slot.GemMedium,
            slot.GemMedium,
            slot.GemSmall,
            slot.GemSmall,
        ];

    }

    export interface HammerSupreme extends Hammer {

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