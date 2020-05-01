import React, { Component } from "react";
import Post from "./Post";

export class LatestPosts extends Component{
    


    render(){
        const lastFivePosts = this.props.posts.slice(-5)
        const postsList = this.props.posts ? lastFivePosts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost}/>) : null
        return(
            <ul id='post-list'>
                {postsList}
            </ul>
        )
    }
}


export default LatestPosts