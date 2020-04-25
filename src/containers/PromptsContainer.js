import React, { Component } from "react";
import { connect } from 'react-redux'
import PostInput from '../components/posts/PostInput';
import { increaseIndex } from '../actions/promptActions'

export class PromptsContainer extends Component{

    state={
        keywords: []
    }

    handleClick = () => {
        let arr=[
            this.props.persons.persons[this.props.persons.index].name,
            this.props.equipment.equipment[this.props.equipment.index].name,
            this.props.monsters.monsters[this.props.monsters.index].name]
            increaseIndex(this.props)
        this.setState(
            {keywords: arr}
        )
    }

    // if you can't do an elegant solution, try an inelegant one  

    render(){
        // const monsters = this.props.monsters.map(mons => <li key={mons.id}>{mons.name}</li>)
        return(
            <div className='prompts-container'> 
                <div>{this.state.keywords.map(el => `"${el}" `)}</div>
                    <button className='prompt-button' onClick={this.handleClick}>Prompt!</button>
                <PostInput addPost={this.props.addPost}/>
           
            </div>
        )
    }
    
}


const mapStateToProps = state => {
    
    return { 
        persons: state.persons,
        monsters: state.monsters,
        equipment: state.equipment,
        loading: state.loading
    }
    
}

const mapDispatchToProps = dispatch => ({
    addPost: text => dispatch({type: 'ADD_POST', text})
})


export default connect(mapStateToProps, mapDispatchToProps)(PromptsContainer)