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
            }
        )
    }
}