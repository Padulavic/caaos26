import React, {Component} from 'react';
import {get} from 'axios';

export default class CircleInput extends Component{

    state = {min: 0, max: 0, current: 0}

    async componentDidMount() {
        const data = await get("https://caaos26.firebaseio.com/atributes.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban").then(response => response.data)
        this.setState({min:data.min});
        this.setState({max:data.max});
        this.setState({current:data.min})
    }

    renderValue(){
        // TODO
    }

    render(){
        return(
            <div className="form_label-wrapper">
                
                <div>
                    <label className="form_label">{this.props.label} </label>
                    <span className="form_range-value-number">{this.state.current}</span>
                </div>

                <input ref={this.props.id} id={this.props.label} onChange={(e)=>this.setState({current: e.target.value})} type="range" min={this.state.min} max={this.state.max} className="form_range"></input>
            </div>
        )
    }

}