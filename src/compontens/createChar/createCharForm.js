import React, {Component} from 'react';
import SelectFromDB from '../formDatabaseComponents/selectFromDB';
import CircleInput from '../formDatabaseComponents/circleInput';
import TextInput from '../formDatabaseComponents/textInput'
import UploadPicture from '../formDatabaseComponents/pictureUpload'
import GenderRadioButton from '../formDatabaseComponents/genderRadioButton'
import FirebaseService from '../../service/firabseService'

export default class CreateChar extends Component{

    state = {

    }

    formOnChange(event){
        let valueObj = {};
        valueObj[event.target.id] = event.target.value;
        this.setState(valueObj)
    }

    getImage(){
    }


    render(){
        console.log(this.state);
        return(
        <div onChange={(event)=>this.formOnChange(event)}>
            <TextInput id="name" label="Name"/>
            <GenderRadioButton id="gender" label="Gender"/>
            <UploadPicture id="picture" label="Upload Picture" alt="uploaded picture"/>
            <SelectFromDB id="class" label="Class" url="https://caaos26.firebaseio.com/classes.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban"/>
            <SelectFromDB id="race" label="Race" url="https://caaos26.firebaseio.com/races.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban"/>
            <SelectFromDB id="alingment" label="Alignment" url="https://caaos26.firebaseio.com/alignment.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban"/>
            <CircleInput id="strength" label="Strength"/>
            <CircleInput id="constitution" label="Constitution"/>
            <CircleInput id="dexterity" label="Dexterity"/>
            <CircleInput id="intelligence" label="Intelligence"/>
            <CircleInput id="wisdom" label="Wisdom"/>
            <CircleInput id="charisma" label="Charisma"/>
        </div>
        );
    };

}