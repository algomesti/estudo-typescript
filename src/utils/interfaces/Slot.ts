import slot from '../enumarates/SizeSlot';
import typeOfCardsAllowed from '../enumarates/TypeOfCardsAllowed';

namespace PivoInterfaces {

    export interface Slot {

        title: string;
    }

    export interface SlotHead extends Slot {
        size: slot.Head
    }

    export interface SlotNeck extends Slot {
        size: slot.Neck
    }

    export interface SlotShoulders extends Slot {
        size: slot.Shoulders
    }

    export interface SlotArm extends Slot {
        size: slot.Arm
    }

    export interface SlotHand extends Slot {
        size: slot.Hand
    }

    export interface SlotFinger extends Slot {
        size: slot.Finger
    }

    export interface SlotBreastplate extends Slot {
        size: slot.breastplate
    }

    export interface SlotWaist extends Slot {
        size: slot.Waist
    }

    export interface SlotLegs extends Slot {
        size: slot.Legs
    }

    export interface SlotBoots extends Slot {
        size: slot.Boots
    }

    export interface SlotHandEquipament extends Slot {
        size: slot.HandEquipament
    }

    export interface SlotGemSmall extends Slot {
        size: slot.GemSmall
    }

    export interface SlotGemMedium extends Slot {
        size: slot.GemMedium

    }

    export interface SlotGemBig extends Slot {
        size: slot.GemBig

    }

}

export default PivoInterfaces;