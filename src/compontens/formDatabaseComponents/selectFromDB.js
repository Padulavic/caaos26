import React, {Component} from 'react';
import {get} from 'axios';


export default class SelectFromFB extends Component{

    state = {optionsArray: []}

    async componentDidMount() { 
        const data = await get(this.props.url).then(response => response.data)
        const jsxData = data.map(opt => <option value={opt}>{opt}</option>);
        this.setState({optionsArray : jsxData});
    }

    render(){
        return(
        <div className="form_label-wrapper">
            <label className="form_label">{this.props.label}</label>
            <select id={this.props.id} className="form_select">
                {this.state.optionsArray}
            </select>
        </div>
    )}
}