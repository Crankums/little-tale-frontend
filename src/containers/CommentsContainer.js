import React, { Component } from "react";
import Comments from "../components/comments/Comments";

class CommentsContainer extends Component{

    render(){
        return(
            <div>
                Comments container!
                <Comments />
            </div>
        )
    }

}

export default CommentsContainer