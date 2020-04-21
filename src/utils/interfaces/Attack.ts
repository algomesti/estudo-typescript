import cardInterface from './Card';

namespace PivoInterfacesAttack {

    export interface Attack extends cardInterface.Card {

        force: number,
        fatigue: number,
    }

}

export default PivoInterfacesAttack;