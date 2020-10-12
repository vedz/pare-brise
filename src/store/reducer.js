import * as actionTypes from './actions';

export const NATURE_INTERVENTION = {
    PARE_BRISE: 'PARE_BRISE',
    LUNETTE_ARRIERE: 'LUNETTE_ARRIERE',
    VITRE_LATERALE_DROITE: 'VITRE_LATERALE_DROITE',
    VITRE_LATERALE_GAUCHE: 'VITRE_LATERALE_GAUCHE',
};

export const VITRE_GAUCHE = {
    PORTE_AVANT: 'VITRE_GAUCHE_PORTE_AVANT',
    PORTE_ARRIERE: 'VITRE_GAUCHE_PORTE_ARRIERE',
    CUSTODE_ARRIERE: 'VITRE_GAUCHE_CUSTODE_ARRIERE',
};
export const VITRE_DROITE = {
    PORTE_AVANT: 'VITRE_DROITE_PORTE_AVANT',
    PORTE_ARRIERE: 'VITRE_DROITE_PORTE_ARRIERE',
    CUSTODE_ARRIERE: 'VITRE_DROITE_CUSTODE_ARRIERE',
};

export const TYPE_DOMMAGE = {
    IMPACT_LEGER: 'IMPACT_LEGER',
    IMPACT_IMPORTANT: 'IMPACT_IMPORTANT',
    FISSURE: 'FISSURE',
};

const initialState = {
    plaque: '',
    marque: '',
    modele: '',
    assureur: '',
    numAssurance: '',
    modele: '',
    natureIntervention: '',
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
    }

    return state;
};

export default reducer;
