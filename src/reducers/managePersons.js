// import { fetchPersons } from '../actions/personActions'



export default function personsReducer(state = { 
    persons: [],
    index: 0,
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
            
            case 'INCREASE_INDEX':
                return {
                    ...state,
                     index: state.index <= state.index.length ? state.index +=1 : state.index = 0
                }
            case 'GET_PROMPT':
                debugger
                let person = state.persons.persons[state.index]
                return {
                    person
                }
            
            default:
                return state
        }
    }
