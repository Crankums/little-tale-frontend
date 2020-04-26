import React, { Component } from "react";

export class CommentInput extends Component{
    state = {
        text : ''
    }

    handleOnSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form>
                    <textarea />
                    <input type="submit" onSubmit={(event)=>this.handleOnSubmit(event)}>Submit</input>
                </form>
            </div>
        )
    }
}

export default CommentInput