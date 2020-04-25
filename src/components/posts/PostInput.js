import React, { Component } from "react";

export class PostInput extends Component{

    state = {
        text: ''
    }

    handleOnChange(event){
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        this.props.addPost(this.state.text)
        this.setState({
            text: ''
        })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit = {(event) => this.handleOnSubmit(event)}>
                    <br></br>
                    <textarea  placeholder="inputs go here"
                    value = {this.state.text}
                    onChange={(event)=> this.handleOnChange(event)}
                    style={{
                        width: 400,
                        height: 200}}/>
                    <br></br>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default PostInput