/*
Create Post
    -fetch POST request - are routes for this written yet?
Delete Post
    -fetch DELETE request
Upvote Post
Downvote Post
React to Post
    -fetch UPDATE(PUT) request
    
Admin:
Update posts
Lock replies*/



export const addPosts = posts => {
    return {
        type: 'ADD_POST',
        posts
    }
}

// export const setAllPosts = () => {
    
//     return {
//         type: "SET_ALL_POSTS"
//     }
// } 

export const createPost = (postData, user) => {
    
    return dispatch => {
        const sendablePostData = {
            title: postData.title,
            text: postData.text,
            user_id: user.id
        }
        return fetch('http://localhost:3001/api/v1/posts', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendablePostData)
        })
        .then(res=>res.json())
        .then(res => {
            if (res.error) {
                alert(res.error)
            } else {
                dispatch(addPosts(res.data))

            }
        
        })
        .then(()=>fetchPosts())
        .catch(console.log)
    }
}

export const fetchPosts = () => {

    return dispatch => {
        dispatch({ type: "REQUESTING_POSTS"})
        return fetch('http://localhost:3001/api/v1/posts', {
            credentials: 'include',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(res => {
            if (res.error) {
                alert(res.error)
            } else {
                dispatch({ type: 'ADD_POSTS', posts: res})
            }
        })
        .catch(console.log)
    }
}