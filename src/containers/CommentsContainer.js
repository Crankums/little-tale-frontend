import React, { Component } from "react";
import Comments from "../components/comments/Comments";

class CommentsContainer extends Component{

    render(){
        return(
            <div className='comments-container'>
                Comments container!
                <Comments />
            </div>
        )
    }

}

export default CommentsContainer