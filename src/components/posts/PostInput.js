import React, { Component } from "react";

export class PostInput extends Component{

    state = {
        text: '',
        title: ''
    }

    handleOnChange(event){
        const {name, value} = event.target
    }

    handleOnSubmit(event) {
        event.preventDefault()
        this.props.addPost(this.state.text)
        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <div className='post-input'>
                <form id='post-input'>
                    <br></br>
                    <textarea placeholder="inputs go here"
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