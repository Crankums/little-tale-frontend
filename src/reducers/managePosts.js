



export default function managePosts(state= {
    posts: [],
    requesting: false
}, action) {
    switch (action.type){
        case 'REQUESTING_POSTS':
            return{
                ...state,
                posts: [...state.posts],
                requesting: true
            }
        case 'ADD_POSTS': 
            return {
                ...state,
                posts: action.posts,
                requesting: false
            }
        case 'SET_ALL_POSTS':
            return action.posts

        case 'DELETE_POST':
            return state.posts.filter( post => post.id === action.postId ? false : true)

        case 'UPDATE_POST':
            return state.map(post => post.id === action.post.id ? action.post : post)
            
        case "CLEAR_POSTS":
            return {
                posts: []
            }       
        default:
            return state
    }
}