/*
x -Create Post
    -fetch POST request - are routes for this written yet?
x -Delete Post
    -fetch DELETE request
doing edit for now, will change to voting in the future {Upvote Post
Downvote Post
React to Post
}    -fetch UPDATE(PUT) request
    
not in scope for current project {Admin:
Update posts
Lock replies}*/



export const addPosts = posts => {
    return {
        type: 'ADD_POSTS',
        posts
    }
}

export const deletePost = postId => {
    return {
        type: "DELETE_POST",
        postId
    }
}

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

export const deletePosts = postId => {

    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/posts/${postId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(()=> {
            dispatch(deletePost(postId))
        })
    }
}


export const updatePosts = post => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/posts/${post.id}/edit`,{
            credentials: "include",
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(res => {
            if (res.error) {
                alert(res.error)
            } else {
                dispatch({ type: 'UPDATE_POST', post: res})
            }
        })
        .catch(console.log)
    }
}