import slot from '../enumarates/SizeSlot';
import typeOfCardsAllowed from '../enumarates/TypeOfCardsAllowed';

namespace PivoInterfaces {

    export interface SlotTypes {

        title: string;
    }

    export interface SlotHead extends SlotTypes {
        size: slot.Head
    }

    export interface SlotNeck extends SlotTypes {
        size: slot.Neck
    }

    export interface SlotShoulders extends SlotTypes {
        size: slot.Shoulders
    }

    export interface SlotArm extends SlotTypes {
        size: slot.Arm
    }

    export interface SlotHand extends SlotTypes {
        size: slot.Hand
    }

    export interface SlotFinger extends SlotTypes {
        size: slot.Finger
    }

    export interface SlotBreastplate extends SlotTypes {
        size: slot.breastplate
    }

    export interface SlotWaist extends SlotTypes {
        size: slot.Waist
    }

    export interface SlotLegs extends SlotTypes {
        size: slot.Legs
    }

    export interface SlotBoots extends SlotTypes {
        size: slot.Boots
    }

    export interface SlotHandEquipament extends SlotTypes {
        size: slot.HandEquipament
    }

    export interface SlotGemSmall extends SlotTypes {
        size: slot.GemSmall
    }

    export interface SlotGemMedium extends SlotTypes {
        size: slot.GemMedium

    }

    export interface SlotGemBig extends SlotTypes {
        size: slot.GemBig

    }

}

export default PivoInterfaces;