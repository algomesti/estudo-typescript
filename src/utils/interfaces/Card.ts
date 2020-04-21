import pivo from './Pivo';

namespace PivoInterfaces {

    export interface Card {

        title: string,
        imageUrl: string,
        description: string,
        pivo: pivo.Pivo,

        equipSlot(): boolean,
        unEquipSlot(): boolean,
    }
}



export default PivoInterfaces;