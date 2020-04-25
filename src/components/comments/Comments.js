import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component{

    render(){
        return(
            <div className='comments'>
                This is where the comments will go
                <Comment />
            </div>
        )
    }
}

export default Comments