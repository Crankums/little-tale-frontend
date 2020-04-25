
export default function managePosts(state= {
    posts: []
}, action) {
    switch (action.type){

        case 'ADD_POST': 
            const post = { text: action.text }
            return {
                ...state,
                posts: [...state.posts, post]
            }
        
        default:
            return state
    }
}