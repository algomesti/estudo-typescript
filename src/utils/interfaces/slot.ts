import size from '../enumarates/size';
import typeOfCardsAllowed from '../enumarates/typeOfCardsAllowed';

namespace PivoInterfaces {
    export interface Slot {
        title: string;
        size: size[];
        typesOfCardsAllowed: typeOfCardsAllowed[];
    }
}

export default PivoInterfaces;