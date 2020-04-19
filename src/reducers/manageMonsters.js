function monstersReducer(state = { 
    monsters: [],
    requesting: false }, action) {
        switch (action.type) {

            case 'START_ADDING_MONSTERS_REQUEST':
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