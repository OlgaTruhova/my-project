import React from 'react';
import './FormTimeRegistration.css';

export default class FormTimeRegistration extends React.Component {

    state = {
        timeButton: ['8.00', '10.00', '12.00', '15.00', '17.00']
    }

    render () {
        const {changeHandlerTime} = this.props;
        const {timeButton} = this.state;

        return (
        
            <div className='wrapper-form-time-registration'>
                <div className='form-time-registration'>
                    {timeButton.map(time => <button value={time} onClick={changeHandlerTime}>{time}</button>)}
                </div>
            </div>        
        )
    }
}