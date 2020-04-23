import React, { Component } from "react";
import PostInput from "../components/posts/PostInput";

export class PostsContainer extends Component{

    render(){
        return(
            <div>
                Posts Container!
                <br></br><br></br>
                <PostInput />
            </div>
        )
    }
}

export default PostsContainer