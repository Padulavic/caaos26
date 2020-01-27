import React, {Component} from 'react';

export default class TextInput extends Component{

    render(){
        return(
            <div className="form_label-wrapper">
                <label className="form_label">{this.props.label}</label>
                <input id={this.props.id} type="text" className="form_text"></input>
            </div>
        )
    }

}