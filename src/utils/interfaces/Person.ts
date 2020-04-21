import cardInterface from './Card';

namespace PivoInterfacesPerson {

    export interface Person extends cardInterface.Card {

        life: number,
        force: number,
        defense: number,

    }

}

export default PivoInterfacesPerson;