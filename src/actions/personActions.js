
const BASE_URL = 'https://www.dnd5eapi.co/api/races'

// fetch(BASE_URL)
//     .then(res => res.json)
//     .then(resJSON => console.log(resJSON.results))

export const fetchPersons = () => {
    return (dispatch) => {
        dispatch({ type: "REQUESTING_PERSONS"})
        fetch(BASE_URL)
            .then(res => res.json())
            .then(resJSON => {
                shuffle(resJSON.results)
                dispatch({ type: 'ADD_PERSONS', persons: resJSON.results})
        })
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
  
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export const increaseIndex = () => {
    return (dispatch) => {
     dispatch({type: "INCREASE_INDEX"})
    }
}
// I'm using "persons" instead of races, 1. "manageRaces" out of context sounds icky, and 2. race is an attribute, and given that they will have no other attributes (class, etc), they are just a person