import React from 'react';
import './ClientFormWithoutMakingAppointment.css';
import '../ClientFormWithAppointment/ClientFormWithAppointment.css';


export const ClientFormWithoutMakingAppointment = ({clickDate, time, changeHandlerTime}) => {

    return (
        <div className='client-form-without-making-appointment'>
            <div className='information-client-appointment' key={`noAppoint${clickDate}${time}`}>
                <div>{clickDate}</div>
                <div>{time}</div>
            </div>
            <button className='style-btn-client-appointment' value={time} onClick={changeHandlerTime}>Записать</button>
        </div>
    )
}