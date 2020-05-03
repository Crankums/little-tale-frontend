import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePosts } from '../../actions/postActions'

class EditPost extends Component{
    constructor(props){
        super(props)
        const post = this.props.posts.find(post => post.id === this.props.location.postId)
        this.state= {
            id: post.id,
            title: post.title,
            text: post.text,
        }
    }





    handleOnChange= event => {
        
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const post = {
            ...this.state
        }
        // console.log(post)
        this.props.updatePosts(post)
    }
    
    
    render(){
        
        return(
            <div className='edit-form'>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <textarea 
                        name='text'
                        value={this.state.text}
                        onChange={this.handleOnChange}
                        style={{
                            width: 350,
                            height: 150}}/>
                    <input type='submit'/>           
                </form>
            </div>
        )
    }
}

export default connect(null, { updatePosts })(EditPost)