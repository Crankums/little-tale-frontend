import React, { Component } from "react";

export class CommentInput extends Component{

    state={
        text:'',
        showForm: false
    }
    

    handleOnSubmit(event){
        event.preventDefault()
    }

    // handleOnClick(){
    //     // debugger
    //     this.setState({
    //         showForm: true
    //     })
    // }

    render(){
        return(
            <div>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input type='text'/>
                    <input type="submit" value="submit" />
                </form>
                {/* <button onClick={this.handleOnClick}>Click to create comment</button>
                {this.state.showForm ? 
                    <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                    <input type='text'></input>
                    <input type='submit'></input>
                </form> :
                null} */}
            </div>
        )
    }
}

export default CommentInput