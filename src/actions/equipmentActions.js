const BASE_URL = 'https://www.dnd5eapi.co/api/equipment'

// fetch(BASE_URL)
//     .then(res => res.json)
//     .then(resJSON => console.log(resJSON.results))

export const fetchEquipment = () => {
    return (dispatch) => {
        dispatch({ type: "REQUESTING_EQUIPMENT"})
        fetch(BASE_URL)
            .then(res => res.json())
            .then(resJSON => {
                dispatch({ type: 'ADD_EQUIPMENT', equipment: resJSON.results})
        })
    }
}