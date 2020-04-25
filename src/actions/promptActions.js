
export function increaseIndex(props){
    props.persons.index < props.persons.persons.length-1 ? props.persons.index+=1 : props.persons.index = 0
    props.monsters.index < props.monsters.monsters.length-1 ? props.monsters.index+=1 : props.monsters.index = 0
    props.equipment.index < props.equipment.equipment.length-1 ? props.equipment.index+=1 : props.equipment.index = 0
    
}