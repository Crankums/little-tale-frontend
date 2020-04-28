const initialState=[]


export default function managePosts(state= initialState, action) {
    switch (action.type){
        case 'ADD_POST': 
            return state.concat(action.posts)
        case 'SET_ALL_POSTS':
            return action.posts
        case 'DELETE_POST':
            return state.filter(post => post.id === action.postId ? false : true)
        case "CLEAR_POSTS":
            return initialState       
        default:
            return state
    }
}