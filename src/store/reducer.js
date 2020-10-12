import * as actionTypes from './actions';

const initialState = {
    plaque: '',
    marque: '',
    modele: '',
    assureur: '',
    num_assurance: '',
    modele: '',
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
