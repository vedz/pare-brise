import PARE_BRISE from '../assets/images/PARE_BRISE.svg';
import LUNETTE_ARRIERE from '../assets/images/LUNETTE_ARRIERE.svg';
import VITRE_LATERALE_DROITE from '../assets/images/VITRE_LATERALE_DROITE.svg';
import VITRE_LATERALE_GAUCHE from '../assets/images/VITRE_LATERALE_GAUCHE.svg';
import IMPACT_LEGER from '../assets/images/IMPACT_LEGER.svg';
import IMPACT_IMPORTANT from '../assets/images/IMPACT_IMPORTANT.svg';
import FISSURE from '../assets/images/FISSURE.svg';
import VITRE_GAUCHE_PORTE_AVANT from '../assets/images/VITRE_GAUCHE_PORTE_AVANT.svg';
import VITRE_GAUCHE_PORTE_ARRIERE from '../assets/images/VITRE_GAUCHE_PORTE_ARRIERE.svg';
import VITRE_GAUCHE_CUSTODE_ARRIERE from '../assets/images/VITRE_GAUCHE_CUSTODE_ARRIERE.svg';
import VITRE_DROITE_PORTE_AVANT from '../assets/images/VITRE_DROITE_PORTE_AVANT.svg';
import VITRE_DROITE_PORTE_ARRIERE from '../assets/images/VITRE_DROITE_PORTE_ARRIERE.svg';
import VITRE_DROITE_CUSTODE_ARRIERE from '../assets/images/VITRE_DROITE_CUSTODE_ARRIERE.svg';

import * as actionTypes from './actions';


//TODO il faut déplacer les constantes dans un autre fichier
export const NATURE_INTERVENTION = {
    PARE_BRISE: {
        label : 'Pare-brise',
        code: "PARE_BRISE",
        img: PARE_BRISE
    },
    LUNETTE_ARRIERE:  {
        label : 'Lunette arrière',
        code: 'LUNETTE_ARRIERE',
        img: LUNETTE_ARRIERE
    },
    VITRE_LATERALE_DROITE: {
        label : 'Vitre latérale droite',
        code : 'VITRE_LATERALE_DROITE',
        img: VITRE_LATERALE_DROITE
    },
    VITRE_LATERALE_GAUCHE:  {
        label : 'Vitre latéral gauche',
        code:  'VITRE_LATERALE_GAUCHE',
        img: VITRE_LATERALE_GAUCHE
    }
};

export const VITRE_GAUCHE = {
    PORTE_AVANT: {
        label : 'Pare-brise',
        code: 'VITRE_GAUCHE_PORTE_AVANT',
        img:VITRE_GAUCHE_PORTE_AVANT
    },
    PORTE_ARRIERE: {
        label : 'Pare-brise',
        code: 'VITRE_GAUCHE_PORTE_ARRIERE',
        img:VITRE_GAUCHE_PORTE_ARRIERE
    },
    CUSTODE_ARRIERE: {
        label : 'Pare-brise',
        code: 'VITRE_GAUCHE_CUSTODE_ARRIERE',
        img:VITRE_GAUCHE_CUSTODE_ARRIERE
    }
};
export const VITRE_DROITE = {
    PORTE_AVANT: {
        label : 'Pare-brise',
        code:'VITRE_DROITE_PORTE_AVANT',
        img:VITRE_DROITE_PORTE_AVANT
    },
    PORTE_ARRIERE: {
        label : 'Pare-brise',
        code :'VITRE_DROITE_PORTE_ARRIERE',
        img:VITRE_DROITE_PORTE_ARRIERE
    },
    CUSTODE_ARRIERE: {
        label : 'Pare-brise',
        code:'VITRE_DROITE_CUSTODE_ARRIERE',
        img:VITRE_DROITE_CUSTODE_ARRIERE
    }
};

export const TYPE_DOMMAGE = {
    IMPACT_LEGER: {
        label : 'Pare-brise',
        code:'IMPACT_LEGER',
        img:IMPACT_LEGER
    },
    IMPACT_IMPORTANT: {
        label : 'Pare-brise',
        code: 'IMPACT_IMPORTANT',
        img:IMPACT_IMPORTANT
    },
    FISSURE: {
        label : 'Pare-brise',
        code:'FISSURE',
        img:FISSURE
    }
};

const initialState = {
    plaque: '',
    marque: '',
    modele: '',
    assureur: '',
    numAssurance: '',
    natureIntervention: 'PARE_BRISE',
    natureInterventionTypeImpact: '',
    natureInterventionVitre:'',
    nbreImpact: 0,
    zoneVoiture: '',
    nom: '',
    prenom: '',
    adresse_intervention: {
        adresse1: '',
        adresse2: '',
        codePostal: '',
        ville: '',
        pays: '',
        telephone: '',
        email: '',
    },
    adresse_client: {
        adresse1: '',
        adresse2: '',
        codePostal: '',
        ville: '',
        pays: '',
        email: '',
        telephone: '', 
    },
    hasGarage: '',
    dateIntervention: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_RESERVATION:
            console.log(action.reservation);
            return { ...state, ...action.reservation };
        
        default:
            break;
    }

    return state;
};

export default reducer;
