import { fetchPersons } from '../actions/personActions'

export default function personsReducer(state = { 
    persons: [],
    requesting: false }, action) {
        switch (action.type) {

            case 'REQUESTING_PERSONS':
                return {
                    ...state,
                    persons: [...state.persons],
                    requesting: true
                }
            
            case 'ADD_PERSONS':
                return {
                    ...state,
                    persons: action.persons,
                    requesting: false
                }
            
            default:
                return state
        }
    }