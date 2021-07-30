import React from 'react';
import buttonClose from '../../button-close.svg';

import './ClientFormWithAppointment.css';

const ClientFormWithAppointment = ({clickDate, clickTime, clientName, clientContact}) => {
    console.log(clientContact);
    return (
        <div className='client-form-with-appointment'>

            <div className='information-client-appointment'>
                <div>{clickDate}</div>
                <div>{clickTime}</div>
                <div>{clientName}</div>
                <div>{clientContact}</div>
            </div>
            <div className='deleting-appointment-client'>
                <img src={buttonClose} alt='img' className='deleting-appointment-client_button' />
            </div>

        </div>
    )
}

export default ClientFormWithAppointment;