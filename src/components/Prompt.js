import React, { Component } from "react";
import { fetchMonsters } from "../actions/monsterActions";
import { fetchPersons } from "../actions/personActions";
import { fetchEquipment } from "../actions/equipmentActions";


export class Prompt extends Component{

    state={
        words: []
    }
    componentDidMount(){
        fetchMonsters
        fetchEquipment
        fetchPersons
    }

    render(){
        return(
            <div>
                <button>Prompt!</button>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
    
}

export default connect()(Prompt)