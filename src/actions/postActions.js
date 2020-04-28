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

export const addPost = post => {
    return {
        type: 'ADD_POST',
        post
    }
}

export const setAllPosts = posts => {
    return {
        type: "SET_ALL_POSTS",
        posts
    }
} 

export const createPost = postData => {
    return dispatch => {
        const sendablePostData = {
            title: postData.title,
            text: postData.text
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
                dispatch(addPost(res.data))
            }
        })
        .catch(console.log)
    }
}

export const getPosts = () => {
    return dispatch => {
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
                dispatch(setAllPosts(res.data))
            }
        })
        .catch(console.log)
    }
}