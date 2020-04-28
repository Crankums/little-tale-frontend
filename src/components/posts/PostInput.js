import React, { Component } from "react";
import { addPost } from "../../actions/postActions";
import { connect } from "react-redux";

export class PostInput extends Component{


    state = {
        text: '',
        title: ''
    }

    handleOnChange= event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const post = {
            ...this.state
        }
        this.props.addPost(post)
        this.setState({
            text: '',
            title: ''
        })
    }



    render(){
        console.log(this)
        return(
            <div className='post-input'>
                <form id='post-input' onSubmit={this.handleOnSubmit}>
                    <br></br>
                    <textarea placeholder="inputs go here"
                    name = 'text'
                    value = {this.state.text}
                    onChange={this.handleOnChange}
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

const mapStateToProps= state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        user: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInput)