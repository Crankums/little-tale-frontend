import React, { Component } from "react";
import { connect } from 'react-redux'
import PostInput from '../components/posts/PostInput';
import { increaseIndex } from '../actions/promptActions'
import { fetchMonsters } from '../actions/monsterActions'
import { fetchPersons } from '../actions/personActions'
import { fetchEquipment } from '../actions/equipmentActions'
export class PromptsContainer extends Component{
    
    componentDidMount(){
        this.props.fetchMonsters()
        this.props.fetchPersons()
        this.props.fetchEquipment()
        // this.props.getCurrentUser()
        
      }

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
                <div 
                className='keywords'
                >
                {this.state.keywords.map(el => `"${el}" `)}
                </div>
                    <button className='prompt-button' onClick={this.handleClick}>Prompt!</button>
                <PostInput keywords={this.state.keywords}/>
           
            </div>
        )
    }
    
}



const mapStateToProps = state => {
    
    return { 
        persons: state.persons,
        monsters: state.monsters,
        equipment: state.equipment,
        loading: state.loading,
        keywords: state.keywords,
        
    }
    
}


export default connect(mapStateToProps, { fetchMonsters, fetchPersons, fetchEquipment })(PromptsContainer)