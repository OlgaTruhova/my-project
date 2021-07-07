import React, {Component} from 'react'
import Calendar from 'react-calendar';
import {FormTimeRegistration} from '../../components/FormTimeRegistration/FormTimeRegistration';
import 'react-calendar/dist/Calendar.css';

export default class CalendarReact extends Component {

    constructor (props) {
        super (props);
        this.state = {
            // date: new Date(),
            clickDate: ''
        }
    }

    changeHandlerDate  = (date) => {
        this.setState({clickDate: date},
        () => {
            console.log(this.state);
        })
    }

    render(){   

        const CreateFormTimeRegistration = (
            <>
                {this.state.clickDate ? <FormTimeRegistration /> : null}
            </>
        )

        return(
            <div>
                <Calendar onClickDay = {this.changeHandlerDate} /> 
                {CreateFormTimeRegistration}  
            </div>
        )
    }
}