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