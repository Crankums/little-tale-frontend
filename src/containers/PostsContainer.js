import React, { Component } from "react";
import Posts from "../components/posts/Posts";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { PostInput } from "../components/posts/PostInput";
// import PostInput from "../components/posts/PostInput";
    
export class PostsContainer extends Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        
        return(
            <div className = 'posts-container'>
                Posts Container!
                <br></br><br></br>
                <PostInput />
                <Posts posts={this.props.posts}/>
                
            </div>
            
        )
        
    }
    
}

const mapStateToProps = state => ({ posts: state.posts.posts })



export default connect(mapStateToProps, { fetchPosts })(PostsContainer)