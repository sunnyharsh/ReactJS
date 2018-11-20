import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    requestAddItem
} from '../modules/ui/actions'

class ReduxActions extends Component{
    constructor(props){
        super(props);
            this.state={
                name:[]
            }
    }
    textChanged=(e)=>{
        console.log("name is" , e.target.value);
        this.setState({
            name:e.target.value
        })
        console.log("state is " , e.target.name)
    }
    buttonClicked=()=>{
        if(this.state.name.length>0){
            this.props.requestAddItem([this.state.name]);
        }
       
    }
    render(){
        return(
            <div>
                <input type="textBox" onChange={this.textChanged}/>

                <button onClick={this.buttonClicked}>Add Item</button>

                <div>
                    {this.props.items && this.props.items.map(( item , index) =>{
                        return <span key={index}>{index} {item}</span>
                    })}
                </div>
            </div>
        )
    }
}


function  mapStateToProps (appState, ownProps){
    //alert(JSON.stringify(ownProps))
    console.log("appstate" , appState);
    return {
        ui: appState.ui,
        items : appState.ui.item
    }
}
function mapDispatchToProps(dispatch) {  
    return {
        ...bindActionCreators({
            requestAddItem
        },dispatch)
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(ReduxActions);