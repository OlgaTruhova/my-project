import React from 'react';
import buttonClose from '../../button-close.svg';

import './ClientFormWithAppointment.css';

export const ClientFormWithAppointment = ({appointmentClient, clickDate}) => {
    return (

        clickDate ?
            appointmentClient.map(appointment => {
                return (
                    <div className='client-form-with-appointment'>
                        <div className='information-client-appointment'>
                            <div>{appointment.clickDate}</div>
                            <div>{appointment.clickTime}</div>
                            <div>{appointment.clientName}</div>
                            <div>{appointment.clientContact}</div>
                        </div> 
                        <div className='deleting-appointment-client'>
                            <img src={buttonClose} alt='img' className='deleting-appointment-client_button' />
                        </div>
                    </div>
                )
            })
        : null  
    )
}