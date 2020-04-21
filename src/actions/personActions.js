const BASE_URL = 'https://www.dnd5eapi.co/api/races'

// fetch(BASE_URL)
//     .then(res => res.json)
//     .then(resJSON => console.log(resJSON.results))

export const fetchEquipment = () => {
    return (dispatch) => {
        dispatch({ type: "REQUESTING_RACES"})
        fetch(BASE_URL)
            .then(res => res.json())
            .then(resJSON => {
                dispatch({ type: 'ADD_RACES', persons: resJSON.results})
        })
    }
}

// I'm using "persons" instead of races, 1. "manageRaces" out of context sounds icky, and 2. race is an attribute, and given that they will have no other attributes (class, etc), they are just a person