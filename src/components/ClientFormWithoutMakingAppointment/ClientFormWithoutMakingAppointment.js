import React from 'react';
import './ClientFormWithoutMakingAppointment.css';


export const ClientFormWithoutMakingAppointment = ({clickDate, clickTime}) => {

    return (
        <div className='client-form-without-making-appointment'>

            <div className='information-client-appointment'>
                <div>{clickDate}</div>
                <div>{clickTime}</div>
            </div>
            <button className='style-btn-client-appointment'>Записать</button>

        </div>
    )
}