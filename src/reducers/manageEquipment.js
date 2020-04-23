// import { fetchEquipment } from '../actions/equipmentActions'

export default function manageEquipment(state = { 
    equipment: [],
    requesting: false }, action) {
        switch (action.type) {

            case 'REQUESTING_EQUIPMENT':
                return {
                    ...state,
                    equipment: [...state.equipment],
                    requesting: true
                }
            
            case 'ADD_EQUIPMENT':
                return {
                    ...state,
                    equipment: action.equipment,
                    requesting: false
                }
            
            default:
                return state
        }
    }