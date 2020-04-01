import * as actionType from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                ...state,
                counter: state.counter + 1
        };
    };
    return state
};

export default reducer;