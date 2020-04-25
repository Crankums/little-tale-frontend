import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component{

    handleOnClick(){
        this.props.deletePost(this.props.post.id)
    }

    render(){
        const { post } = this.props
        return(
            <div>
                <li>
                    {post.text}
                    <button onClick={()=>this.handleOnClick()}>Delete Post!</button>
                    <CommentsContainer post={post}/>
                </li>
                
            </div>
        )
    }
}

export default Post