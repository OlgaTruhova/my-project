import React from 'react';
import {ClientFormWithAppointment} from '../ClientFormWithAppointment/ClientFormWithAppointment';
import {ClientFormWithoutMakingAppointment} from '../ClientFormWithoutMakingAppointment/ClientFormWithoutMakingAppointment';
import './ClientRegistration.css';

export default class ClientRegistration extends React.Component {

    state = {
        timeAppointment: ['8.00', '10.00', '12.00', '15.00', '17.00'],
    }

    render () {
        const {appointmentClient, clickDate, changeHandlerTime, deletingAppointment} = this.props;
        const {timeAppointment} = this.state;

        const timeNoAppointment = (
            timeAppointment.filter(time => {
                return !appointmentClient.find(appointment => appointment.clickTime === time)
            })
        )

        return (
            <div>
                <div className='client-appointment'>
                    <ClientFormWithAppointment 
                        appointmentClient={appointmentClient} 
                        clickDate={clickDate} 
                        deletingAppointment={deletingAppointment} />
                    {
                        clickDate ? (
                            timeNoAppointment.map(time => {  
                                return (<ClientFormWithoutMakingAppointment 
                                    clickDate={clickDate} 
                                    time={time} 
                                    changeHandlerTime={changeHandlerTime} />)
                            })
                        ) : null
                    }
                </div>
            </div>
        )
    }
}
