import React, { Component } from "react";
import { increaseIndex } from '../actions/promptActions'

export class Prompts extends Component{
    
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

    setKeywords = newKeywords => {
        this.props.updateKeywords(newKeywords)
    }

    render(){
        console.log(this.props)
        return(
            <div className='prompts-container'> 
                <div 
                className='keywords' 
                onChange={this.setKeywords}
                >
                   <p> {this.state.keywords.map(el => `"${el}" `)}</p>
                </div>
                <button className='prompt-button' onClick={this.handleClick}>Prompt!</button>
            </div>
        )
    }
    
}


export default Prompts 