import React, {Component} from 'react';

export default class GenderRadioButton extends Component{

    render(){
        return(
            <div className="form_label-wrapper">
                <label className="form_label">{this.props.label}</label>
                <div>
                    <input id={this.props.id} className="form_radio" type="radio" name="gender" value="male"/> Male
                    <input id={this.props.id} className="form_radio" type="radio" name="gender" value="female"/> Female
                    <input id={this.props.id} className="form_radio" type="radio" name="gender" value="other"/> Other
                </div>
            </div>
        )
    }

}