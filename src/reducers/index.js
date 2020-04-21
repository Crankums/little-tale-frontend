import manageEquipment from './manageEquipment'
import manageMonsters from './manageMonsters'


export const rootReducer = combineReducers({
    monsters: manageMonsters,
    equipment: manageEquipment
})