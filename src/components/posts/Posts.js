import React, { Component } from "react";
import Post from "./Post";

export class Posts extends Component{

    render(){
        return(
            <div>
                This is where the posts will go
                <Post 
                deletePost={this.props.deletePost}/>
            </div>
        )
    }
}



export default Posts