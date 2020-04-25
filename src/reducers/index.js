import { combineReducers } from "redux";
import manageEquipment from './manageEquipment'
import manageMonsters from './manageMonsters'
import managePersons from './managePersons'
import managePosts from "./managePosts";

export const rootReducer = combineReducers({
    monsters: manageMonsters,
    equipment: manageEquipment,
    persons: managePersons,
    posts: managePosts
})

export default rootReducer