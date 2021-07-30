import React from 'react'
import Calendar from 'react-calendar';
import FormTimeRegistration from '../../components/FormTimeRegistration/FormTimeRegistration';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';


export const CalendarReact = ({changeHandlerDate, clickDate, changeHandlerTime}) => {

    return(

        <div className='wrapper-calendar'>
            <Calendar className='calendar' onClickDay = {changeHandlerDate} /> 

            {clickDate ? <FormTimeRegistration changeHandlerTime={changeHandlerTime} /> : null}
        </div>
    ) 
}