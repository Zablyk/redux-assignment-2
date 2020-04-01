import * as actionType from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat({id: Math.random(),
                    name: action.personData.name,
                    age: action.personData.age})
            };
            case actionType.DELETE_PERSON:
                return {
                    ...state,
                    persons: state.persons.filter( person => person.id !== action.personId) 
                };
    }
    return state;
};

export default reducer;