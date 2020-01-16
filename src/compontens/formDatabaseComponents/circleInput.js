import React, {Component} from 'react';
import {get} from 'axios';

export default class CircleInput extends Component{

    state = {min: 0, max: 0}

    async componentDidMount() {
        const data = await get("https://caaos26.firebaseio.com/atributes.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban").then(response => response.data)
        this.setState({min:data.min});
        this.setState({max:data.max});
    }

    render(){
        return(
            <div className="circleInput_wrapper">
                <label className="form_label">{this.props.label}</label>

                {/* <div></div> */}
                <input type="range" min={this.state.min} max={this.state.max} className="form_range"></input>
            </div>
        )
    }

}