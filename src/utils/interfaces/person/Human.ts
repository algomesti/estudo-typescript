
import personInterface from '../Person';

import slotInterface from '../SlotType';

namespace PivoInterfacePerson {

    export interface Human extends personInterface.Person {

        slots: {
            head: slotInterface.SlotHead,
            neck: slotInterface.SlotNeck,
            shoulders: slotInterface.SlotShoulders,
            arm: [
                slotInterface.SlotArm,
                slotInterface.SlotArm,
                slotInterface.SlotHandEquipament,
                slotInterface.SlotHandEquipament
            ],
            finger: [
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
                slotInterface.SlotFinger,
            ]
            breastplate: slotInterface.SlotBreastplate,
            waist: slotInterface.SlotWaist,
            legs: slotInterface.SlotLegs,
            boots: slotInterface.SlotBoots,
        }
    }

}

export default PivoInterfacePerson;