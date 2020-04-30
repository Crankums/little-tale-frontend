import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component{

    render(){
        return(
            <div className='comments'>
                
                <Comment />
            </div>
        )
    }
}

export default Comments