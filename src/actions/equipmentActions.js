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
                shuffle(resJSON.results)
                dispatch({ type: 'ADD_EQUIPMENT', equipment: resJSON.results})
        })
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
  
      [array[i], array[j]] = [array[j], array[i]];
    }
  }