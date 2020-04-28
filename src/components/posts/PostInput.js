import React, { Component } from "react";
import { createPost } from "../../actions/postActions";
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
            ...this.state,
            title: this.props.keywords.join(', ')
        }
        
        this.props.createPost(post, this.props.user)
        
        this.setState({
            text: '',
            title: ''
        })
    }



    render(){
        console.log(this.props)
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
    return {
        user: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (postInputs, user) => dispatch(createPost(postInputs, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInput)