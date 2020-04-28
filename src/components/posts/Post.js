import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component{

    handleOnClick(){
        this.props.deletePost(this.props.post.id)
    }

    render(){
        const { post } = this.props
        return(
                <li className='post'>
                    <p>{post.title}</p>
                    {post.text}
                    <button id='delete-button' onClick={()=>this.handleOnClick()}>Delete Post!</button>
                    <CommentsContainer post={post}/>
                </li>
        )
    }
}

export default Post