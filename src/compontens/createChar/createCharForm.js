import React, {Component} from 'react';
import SelectFromDB from '../formDatabaseComponents/selectFromDB';
import CircleInput from '../formDatabaseComponents/circleInput';

export default class CreateChar extends Component{

    render(){
        
        return(
        <div>
            <SelectFromDB label="Class" url="https://caaos26.firebaseio.com/classes.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban"/>
            <SelectFromDB label="Race" url="https://caaos26.firebaseio.com/races.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban"/>
            <SelectFromDB label="Alignment" url="https://caaos26.firebaseio.com/alignment.json?auth=dcJZHmGmV82H71bARkNyecZyVBubfWbIvkwg6ban"/>
            <CircleInput label="Strength"/>
            <CircleInput label="Constitution"/>
            <CircleInput label="Dexterity"/>
            <CircleInput label="Intelligence"/>
            <CircleInput label="Wisdom"/>
            <CircleInput label="Charisma"/>
        </div>
        );
    };

}