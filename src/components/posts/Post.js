import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component{

    handleOnClick(){
        this.props.deletePost(this.props.post.id)
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

export default Post