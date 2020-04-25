import React, { Component } from "react";
import Post from "./Post";

export class Posts extends Component{
    

    render(){
        
        const posts = this.props.posts.posts
        console.log(this.props)
        const postsList = posts.map(post => <Post post={post} deletePost={this.props.deletePost}/>)
        
        return(
            <ul id='post-list'>
                {postsList}
            </ul>
        )
    }
}



export default Posts