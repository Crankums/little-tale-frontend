import { combineReducers } from "redux";
import manageEquipment from './manageEquipment'
import manageMonsters from './manageMonsters'
import managePersons from './managePersons'
import managePosts from "./managePosts";
import manageComments from "./manageComments";
import manageUsers from "./manageUsers";
import currentUser from "./currentUser";
import manageLoginForm from './manageLoginForm'

export const rootReducer = combineReducers({
    monsters: manageMonsters,
    equipment: manageEquipment,
    persons: managePersons,
    posts: managePosts,
    comments: manageComments,
    users: manageUsers,
    currentUser,
    manageLoginForm

})

export default rootReducer