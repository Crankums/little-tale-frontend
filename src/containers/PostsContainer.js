import React, { Component } from "react";
import Posts from "../components/posts/Posts";
import PostInput from "../components/posts/PostInput";
import Prompts from "../components/Prompts";
import LatestPosts from '../components/posts/LatestPosts'
import { connect } from "react-redux";
import { fetchPosts, updatePosts } from "../actions/postActions";
import { fetchMonsters } from "../actions/monsterActions";
import { fetchEquipment } from "../actions/equipmentActions";
import { fetchPersons } from "../actions/personActions";
import { Switch, Route, Link } from "react-router-dom";
    
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
        console.log(this.props)
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
                    keywords={this.state.keywords}
                    />
                <div className='post-links'>   
                    <Link to='/posts/latest-posts'><button> Latest Posts </button></Link>
                    <Link to='/posts/all-posts'><button> All Posts </button></Link>
                </div>
                <Switch>
                    <Route path={`/posts/latest-posts`} render={(routerProps) => <LatestPosts {...routerProps} posts={this.props.posts}/>}/>
                    <Route path={'/posts/all-posts'} render={(routerProps) => <Posts {...routerProps} posts={this.props.posts}/>}/>
                </Switch>    
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    posts: state.posts.posts,
    monsters: state.monsters,
    equipment: state.equipment,
    persons: state.persons,
    user: state.currentUser
})


export default connect(mapStateToProps, { fetchPosts, fetchMonsters, fetchEquipment, fetchPersons, updatePosts })(PostsContainer)