import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { deletePosts, updatePosts } from "../../actions/postActions";
export class Posts extends Component{
    


    render(){
        const postsList = this.props.posts ? this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePosts} updatePosts={this.props.updatePosts}/>) : null
        return(
            <ul id='post-list'>
                {postsList}
            </ul>
        )
    }
}



export default connect(null, { deletePosts, updatePosts })(Posts)