import React, {Component} from 'react';
import {get} from 'axios';


export default class SelectFromFB extends Component{

    state = {opstionsArray: []}

    async componentDidMount() { 
        const data = await get(this.props.url).then(response => response.data)
        const jsxData = data.map(opt => <option value={opt}>{opt}</option>);
        this.setState({optionsArray : jsxData});
    }


    render(){
        return(
        <div className="selectFromFB_wrapper">
            <label className="form_label">{this.props.label}</label>
            <select className="form_select">
                {this.state.optionsArray}
            </select>
        </div>
    )}
}