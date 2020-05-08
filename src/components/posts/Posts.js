import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { deletePosts, updatePosts } from "../../actions/postActions";

export class Posts extends Component{
    
    handleChange = event => {
        this.props.updateSort(event.target.value)
    }

    render(){
        const postsList = this.props.posts ? this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePosts} updatePosts={this.props.updatePosts}/>) : null
        return(
            <>
            <select onChange={this.handleChange}>
                <option selected value='sortAz'>Oldest</option>
                <option value='sortZa'>Newest</option>
            </select>
            <ul id='post-list'>
                {/* what's selected from the menu */}
                {/* how the user wants to sort the posts */}
                {postsList}
            </ul>
            </>
        )
    }
}



export default connect(null, { deletePosts, updatePosts })(Posts)