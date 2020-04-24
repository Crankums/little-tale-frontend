import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component{

    render(){
        return(
            <div>
                This is A post
                <CommentsContainer postId={this.props.postId}/>
            </div>
        )
    }
}

export default Post