import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component{

    render(){
        return(
            <div>
                This is A post
                <CommentsContainer />
            </div>
        )
    }
}

export default Post