import React, { Component } from "react";
import Post from "./Post";

export class Posts extends Component{
    

    render(){
        console.log(this.props.posts)
        // const posts = this.props.posts.posts
        const postsList = this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost}/>)
        
        return(
            <ul id='post-list'>
                {postsList}
            </ul>
        )
    }
}



export default Posts