import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePosts } from '../../actions/postActions'

class EditPost extends Component{
    

    handleOnChange = () => {
        console.log()
    }

    handleOnSubmit = event => {
        event.preventDefault()
        console.log("Submitted")
    }
    
    
    render(){
        const post = this.props.posts.find(post => post.id === this.props.location.postId)
        console.log(post)
        return(
            <div className='edit-form'>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <textarea 
                        name='text'
                        value={post.text}
                        onChange={this.handleOnChange}
                        style={{
                            width: 400,
                            height: 200}}/>
                    <input type='submit'/>Submit            
                </form>
            </div>
        )
    }
}

export default connect(null, { updatePosts })(EditPost)