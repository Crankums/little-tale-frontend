import React, { Component } from "react";
import Post from "./Post";

export class Posts extends Component{

    render(){
        return(
            <div>
                These are where the posts will go
                <Post />
            </div>
        )
    }
}

export default Posts