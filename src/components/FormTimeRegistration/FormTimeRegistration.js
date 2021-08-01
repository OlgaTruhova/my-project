import React from 'react';
import './FormTimeRegistration.css';

export default class FormTimeRegistration extends React.Component {

    state = {
        timeButton: ['8.00', '10.00', '12.00', '15.00', '17.00']
    }

    render () {
        const styleButton = {
            background: 'grey',
            color: 'black'
        }
        const {changeHandlerTime} = this.props;
        const {timeButton} = this.state;
        const {appointmentClient} = this.props;
        console.log(appointmentClient);

        
        // const isAppointment = [];
        // const noAppointment = [];

        // const result = (
       
        //     timeButton.forEach(time => appointmentClient.forEach(appointment => appointment.clickTime === time ?
        //         isAppointment.push(appointment) : noAppointment.push(time)))
        // )
    
        // console.log(isAppointment);
        // console.log(noAppointment);

        // const result = (
        //     timeButton.map(time => <button key={time} onClick={changeHandlerTime}>{time}</button>)
        // )
        // console.log(result);

        // const res = (
        //     result.map(button => appointmentClient.map(appointment => appointment.clickTime === button.key ? 
        //     console.log(button.className) : null)) 
        // )
        return (
        
            <div className='wrapper-form-time-registration'>
                <div className='form-time-registration'>
                    {timeButton.map(time => <button value={time} onClick={changeHandlerTime}>{time}</button>)}
                    {/* {result} */}
                    {/* {res} */}
                </div>
            </div>        
        )
    }
}