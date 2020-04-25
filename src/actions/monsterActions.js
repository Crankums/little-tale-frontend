const BASE_URL = 'https://www.dnd5eapi.co/api/monsters'

// fetch(BASE_URL)
//     .then(res => res.json)
//     .then(resJSON => console.log(resJSON.results))

export const fetchMonsters = () => {
    return (dispatch) => {
        dispatch({ type: "REQUESTING_MONSTERS"})
        fetch(BASE_URL)
            .then(res => res.json())
            .then(resJSON => {
                shuffle(resJSON.results)
                dispatch({ type: 'ADD_MONSTERS', monsters: resJSON.results})
        })
    }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 

    [array[i], array[j]] = [array[j], array[i]];
  }
}

/*fetch('https://www.dnd5eapi.co/api/monsters')
.then(res => res.json())
.then(jsonObj => jsonObj.results.map(el => el.name))
.then(name => monsArr.push(name))

shuffle(monsArr[0])
*/

/* herein lies the challenge. Do I:
    1. Fetch the entire results array, picking a random index from within?
        -iterate or shuffle the results, then pick a name off the top (calling this raffle style)  
    2. Fetch a random index out of the results?
    
    The former would require REQUEST, ADD, SHUFFLE, PICK
    The latter would require fetching the length (to keep it dynamic), then generating random number, then request, fetch, add, display*/