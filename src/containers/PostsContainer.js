import React, { Component } from "react";
import Posts from "../components/posts/Posts";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import  PostInput  from "../components/posts/PostInput";
import { fetchMonsters } from "../actions/monsterActions";
import { fetchEquipment } from "../actions/equipmentActions";
import { fetchPersons } from "../actions/personActions";
import Prompts from "../components/Prompts";
    
export class PostsContainer extends Component{

    state = {
        keywords: []
    }

    componentDidMount(){
        this.props.fetchPosts()
        this.props.fetchMonsters()
        this.props.fetchEquipment()
        this.props.fetchPersons()
    }

    updateKeywords = newKeywords => {
        this.setState(
            {keywords: newKeywords}    
        )
    }

    render(){
        
        return(
            <div className = 'posts-container'>
                <br></br><br></br>
                <Prompts 
                    monsters={this.props.monsters} 
                    equipment={this.props.equipment} 
                    persons={this.props.persons}
                    updateKeywords={this.updateKeywords} />
                <PostInput 
                    // user={this.props.user}
                    keywords={this.state.keywords}/>
                <Posts 
                    posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    posts: state.posts.posts,
    monsters: state.monsters,
    equipment: state.equipment,
    persons: state.persons,
    loading: state.loading,
    user: state.currentUser
})


export default connect(mapStateToProps, { fetchPosts, fetchMonsters, fetchEquipment, fetchPersons })(PostsContainer)