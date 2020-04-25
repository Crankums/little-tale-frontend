export const getPrompt = () => {
    return {
        type: 'GET_PROMPT'
    }

}

export const increaseIndex = () => {
    return {
        type: 'INCREASE_INDEX',
        // index: index+=1
    }
}