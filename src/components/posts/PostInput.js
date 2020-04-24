import React, { Component } from "react";

export class PostInput extends Component{

    render(){
        return(
            <div>
                <form>
                <textarea></textarea>
                <input type='submit' placeholder="inputs go here"></input>
                </form>
            </div>
        )
    }
}

export default PostInput