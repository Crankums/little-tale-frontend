import React, { Component } from "react";
import Comments from "../components/comments/Comments";
import { connect } from "react-redux";
import CommentInput from "../components/comments/CommentInput";

class CommentsContainer extends Component{

    render(){
        return(
            <div className='comments-container'>
                
                <CommentInput addComment={this.props.addComment}/>
                <Comments 
                comments={this.props.comments}
                deleteComment={this.props.deleteComment}/>
            </div>
        )
    }

}

const mapStateToProps = state => ({ comments: state.comments })

const mapDispatchToProps = dispatch => ({
    addComment: text => dispatch({type: 'ADD_COMMENT', text}),
    deletePost: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)