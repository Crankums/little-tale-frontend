import React, { Component } from "react";
import Posts from "../components/posts/Posts";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { PostInput } from "../components/posts/PostInput";
import { fetchMonsters } from "../actions/monsterActions";
import { fetchEquipment } from "../actions/equipmentActions";
import { fetchPersons } from "../actions/personActions";
import { Prompts } from "../components/Prompts";
    
export class PostsContainer extends Component{

    componentDidMount(){
        this.props.fetchPosts()
        this.props.fetchMonsters()
        this.props.fetchEquipment()
        this.props.fetchPersons()
    }

    render(){
        return(
            <div className = 'posts-container'>
                <br></br><br></br>
                <Prompts monsters={this.props.monsters} equipment={this.props.equipment} persons={this.props.persons} />
                <PostInput />
                <Posts posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    posts: state.posts.posts,
    monsters: state.monsters,
    equipment: state.equipment,
    persons: state.persons,
    loading: state.loading})


export default connect(mapStateToProps, { fetchPosts, fetchMonsters, fetchEquipment, fetchPersons })(PostsContainer)