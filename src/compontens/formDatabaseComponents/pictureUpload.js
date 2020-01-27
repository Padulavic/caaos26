import React, {Component} from 'react';
import firebase from 'firebase';

export default class UploadPicture extends Component{

    state = {file: null}

    renderUploadedPic(event){
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
          })
    }

    render(){
        return(
            <div className="form_image_input_wrapper">
                <img className="pic_preview" src={this.state.file} alt={this.props.alt}/>
                <input id={this.props.id} type="file" className="form_pic" onChange={(e) => this.renderUploadedPic(e)} src={this.state.file}/>
            </div>
        )
    }

}