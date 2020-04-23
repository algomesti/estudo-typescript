import pivo from './Pivo';

namespace PivoInterfaces {

    export interface Card {

        title: string,
        imageUrl: string,
        description: string,
        pivo: pivo.Pivo,
        slotManager: slotManager,

        equipSlot(): boolean,
        unEquipSlot(): boolean,

        getForce(): number,
        getDefense(): number,
        getFatigue(): number,

    }
}



export default PivoInterfaces;