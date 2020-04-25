import React, { Component } from "react";
import Post from "./Post";

export class Posts extends Component{

    render(){
        const { posts, deletePost } = this.props
        const postList = posts.map(post => {
            return(
                <Post
                    key={post.id}
                    post={post}
                    deletePost={deletePost}
                />
            )
        })
        return(
            <ul>
                {postList}
            </ul>
        )
    }
}



export default Posts