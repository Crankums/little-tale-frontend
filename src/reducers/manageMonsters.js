import { fetchMonsters } from '../actions/monsterActions'

export default function monstersReducer(state = { 
    monsters: [], 
    index:0,
    requesting: false }, action) {
        switch (action.type) {

            case 'REQUESTING_MONSTERS':
                return {
                    ...state,
                    monsters: [...state.monsters],
                    requesting: true
                }
            
            case 'ADD_MONSTERS':
                return {
                    ...state,
                    monsters: action.monsters,
                    requesting: false
                }

            case 'GET_MONSTERS':
                return{
                    ...state,
                    index: index+=1
                }
            /*if index > array.length {
                index: 0
            } */
            default:
                return state
        }
    }