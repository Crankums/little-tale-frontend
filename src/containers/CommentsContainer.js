import React, { Component } from "react";
import Comments from "../components/comments/Comments";
import { connect } from "react-redux";

class CommentsContainer extends Component{

    render(){
        return(
            <div className='comments-container'>
                Comments container!
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