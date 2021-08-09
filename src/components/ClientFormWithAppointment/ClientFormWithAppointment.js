import React from 'react';
import buttonClose from '../../button-close.svg';
import './ClientFormWithAppointment.css';

export const ClientFormWithAppointment = ({appointmentClient, clickDate, deletingAppointment}) => {

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
                        <button className='deleting-appointment-client' onClick={deletingAppointment} 
                        value={appointment.clickTime}>
                            <img src={buttonClose} alt='img' className='deleting-appointment-client_button' />
                        </button>
                    </div>
                )
            })
        : null  
    )
}