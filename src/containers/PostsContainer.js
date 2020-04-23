import React, { Component } from "react";
import Posts from "../components/posts/Posts";
// import PostInput from "../components/posts/PostInput";


export class PostsContainer extends Component{

    render(){
        return(
            <div>
                Posts Container!
                <br></br><br></br>
                <Posts />
            </div>
        )
    }
}

export default PostsContainer