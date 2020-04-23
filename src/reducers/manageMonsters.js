export default function monstersReducer(state = { 
    monsters: [],
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
            
            default:
                return state
        }
    }