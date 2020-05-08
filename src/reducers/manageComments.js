export default function manageComments(state = {
    comments: []
}, action){
     switch (action.type) {
        /* add comments */


        case 'ADD_COMMENT':
            const comment = { text: action.text }

            return {
                ...state,
                comments: [...state.comments, comment]
            }

        // delete comment

     
         default:
            return state;
     }

}

// story part: post.comments.length, copy to var, put in corner as story part.