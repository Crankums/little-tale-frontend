export default function manageComments(state = {
    comments: []
}, action){
     switch (action.type) {
         case 'ADD_COMMENT':
            const comment = { text: action.text }
            return {
                ...state,
                comments: [...state.comments, comment]
            }
     
         default:
            return state;
     }

}