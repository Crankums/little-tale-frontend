import React, { Component } from "react";
import Posts from "../components/posts/Posts";
import { connect } from "react-redux";
// import PostInput from "../components/posts/PostInput";


export class PostsContainer extends Component{

    render(){
        return(
            <div>
                Posts Container!
                <br></br><br></br>
                <Posts 
                posts={this.props.posts}
                deletePost={this.props.deletePost}/>
            </div>
        )
    }
}

const mapStateToProps = state =>
({ posts: state.posts})

const mapDispatchToProps = dispatch => ({
    deletePost: id => dispatch({type: 'DELETE_POST', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)