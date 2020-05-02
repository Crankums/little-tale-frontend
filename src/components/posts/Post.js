import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postActions'

class Post extends Component{


    handleOnClick(){
        this.props.deletePost(this.props.post.id)
        console.log(this.props.post.id, " has been deleted.")
    }

    render(){
        console.log(this.props)
        const { post } = this.props
        return(
                <div className='post'>
                    <p>{post.title}</p>
                    {post.text}
                    <button id='delete-button' onClick={()=>this.handleOnClick()}>Delete Post!</button>
                    <CommentsContainer post={post}/>
                </div>
        )
    }
}

export default connect(null, {fetchPosts})(Post)