
export function increaseIndex(props){
    if (props.persons.index < props.persons.persons.length-1) {
        props.persons.index+=1
    } else {
        props.persons.index = 0
    }
    if (props.monsters.index < props.monsters.monsters.length-1) {
        props.monsters.index+=1
    } else {
        props.monsters.index = 0
    }
    if (props.equipment.index < props.equipment.equipment.length-1) {
        props.equipment.index+=1
    } else {
        props.equipment.index = 0
    }
}