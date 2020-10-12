import * as actionTypes from './actions';

export const ZONE_VOITURE = {
    PARE_BRISE: 'PARE_BRISE',
    FENETRE_AVANT_DROITE: 'FENETRE_AVANT_DROITE',
    FENETRE_AVANT_GAUCHE: 'FENETRE_AVANT_GAUCHE',
    FENETRE_ARRIERE_DROIT: 'FENETRE_ARRIERE_DROIT',
    FENETRE_ARRIRE_GAUCHE: 'FENETRE_ARRIRE_GAUCHE',
    PARE_BRISE_ARRIRE: 'PARE_BRISE_ARRIRE',
    TOIT: 'TOIT',
};

const initialState = {
    plaque: '',
    marque: '',
    modele: '',
    assureur: '',
    num_assurance: '',
    modele: '',
    nbreImpact: 0,
    zoneVoiture: '',
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
