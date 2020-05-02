import React, { Component } from 'react'
// import CommentsContainer from '../../containers/CommentsContainer'
import { connect } from 'react-redux'
import { fetchPosts, updatePosts } from '../../actions/postActions'
import { Link } from 'react-router-dom'

class Post extends Component{


    handleDelete(){
        this.props.deletePost(this.props.post.id)
        console.log(this.props.post.id, " has been deleted.")
    }

    handleUpdate(){
        console.log(this.props,this.state)
        
    }

    render(){
        const { post } = this.props
        return(
                <div className='post'>
                    <h4>{post.title}</h4>
                    <p>{post.text}</p>
                    <button id='delete-button' onClick={()=>this.handleDelete()}>Delete Post!</button>
                    
                    {/* <CommentsContainer post={post}/> */}
                </div>
        )
    }
}

export default connect(null, {fetchPosts, updatePosts})(Post)