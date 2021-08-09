import React from 'react';
import './FormTimeRegistration.css';

export default class FormTimeRegistration extends React.Component {

    state = {
        timeButton: ['8.00', '10.00', '12.00', '15.00', '17.00']
    }

    getTimeAppointment = (timeButton, appointmentClient, isFree) => {
        return timeButton.filter(time => {
            return isFree ?
            !appointmentClient.find(appointment => appointment.clickTime === time) : null
        })
    }
 
    render () {
        const {changeHandlerTime, appointmentClient} = this.props;
        const {timeButton} = this.state;

        const timeNoAppointment = this.getTimeAppointment(timeButton, appointmentClient, true);
    
        return (
            <div className='wrapper-form-time-registration'>
                <div className='form-time-registration'>
                    {timeButton.map(time => 
                    <button className={!timeNoAppointment.some(time1 => time1 === time) ? 'form-time-registration-disable__button' : 'form-time-registration__button'} 

                    value={time} key={`key${time}`} disabled={!timeNoAppointment.some(time1 => time1 === time)} 
                    onClick={changeHandlerTime}>{time}</button>)}
                </div>
            </div>        
        )
    }
}