import { QueryBuilder } from '@material-ui/icons';
import * as actionTypes from './actions';

export const ZONE_VOITURE = {
    PARE_BRISE: 'PARE_BRISE',
    FENETRE_AVANT_DROITE: 'FENETRE_AVANT_DROITE',
    FENETRE_AVANT_GAUCHE: 'FENETRE_AVANT_GAUCHE',
    FENETRE_ARRIERE_DROIT: 'FENETRE_ARRIERE_DROIT',
    FENETRE_ARRIERE_GAUCHE: 'FENETRE_ARRIRE_GAUCHE',
    CUSTODE_ARRIERE_GAUCHE: 'CUSTODE_ARRIERE_GAUCHE',
    CUSTODE_ARRIERE_DROITE: 'CUSTODE_ARRIERE_DROITE',
    PARE_BRISE_ARRIRE: 'PARE_BRISE_ARRIRE',
    TOIT: 'TOIT',
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
