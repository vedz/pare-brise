import * as actionTypes from './actions'

const initialState = {
    nom: '',
    prenom: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_RESERVATION:
            console.log(action.reservation);
            return { ...state, ...action.reservation }
    }

    return state;
}

export default reducer;