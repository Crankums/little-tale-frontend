import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { deletePosts } from "../../actions/postActions";

export class LatestPosts extends Component{
    


    render(){
        console.log(this.props)
        const lastFivePosts = this.props.posts ? this.props.posts.slice(-5) : null
        const postsList = this.props.posts ? lastFivePosts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePosts}/>) : null
        return(
            <ul id='post-list'>
                {postsList}
            </ul>
        )
    }
}


export default connect(null, { deletePosts })(LatestPosts)