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

    render(){
        
        return(
            <div className='prompts-container'> 
                <div className='keywords' >
                    {this.state.keywords.map(el => `"${el}" `)}
                    <button className='prompt-button' onClick={this.handleClick}>Prompt!</button>
                </div>
            </div>
        )
    }
    
}


export default Prompts 