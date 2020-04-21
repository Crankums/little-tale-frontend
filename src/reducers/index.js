import manageEquipment from './manageEquipment'
import manageMonsters from './manageMonsters'
import managePersons from './managePersons'

export const rootReducer = combineReducers({
    monsters: manageMonsters,
    equipment: manageEquipment,
    persons: managePersons
})