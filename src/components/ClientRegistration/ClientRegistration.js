import React from 'react';
import ClientFormWithAppointment from '../ClientFormWithAppointment/ClientFormWithAppointment';
import {ClientFormWithoutMakingAppointment} from '../ClientFormWithoutMakingAppointment/ClientFormWithoutMakingAppointment';
import './ClientRegistration.css';

export default class ClientRegistration extends React.Component {
    state = {
        timeAppointment: ['8.00', '10.00', '12.00', '15.00', '17.00']
    }

   
    render () {

        const {appointmentClient} = this.props;
        const {timeAppointment} = this.state;
        // console.log(appointmentClient);

        const formAppointment = (
            
            // <>
            //     {appointmentClient.forEach(appointment => timeAppointment.find(time => time === appointment.clickTime ?
            //     <ClientFormWithAppointment {...appointment} /> : console.log({...appointment})))}
              
            // </>

            <>
           {/* { timeAppointment.map(time => appointmentClient.find((...appointment) => ))} */}
                {/* {console.log(appointmentClient.map(({...clientInfo}) => (<ClientFormWithAppointment {...clientInfo} /> )))
                
                .concat(
                    
                    (timeAppointment.forEach(time => appointmentClient.filter(appointment => appointment.clickTime === time ? 
                        <ClientFormWithoutMakingAppointment {...appointment} /> : null)))
                )
                } */}
            </>
            // <>
            //     {timeAppointment.map(time => 
            //         appointmentClient.find(appointment => 
            //             appointment.clickTime === time ? (<ClientFormWithAppointment {...appointment} />) : console.log('hello')))}
            // </>
        )

        return (
            <div className='wrapper-client-registration'>
               
                <div className='client-registration'>
                {formAppointment}
                    {/* <ClientFormWithAppointment />
                    <ClientFormWithoutMakingAppointment />
                    <ClientFormWithoutMakingAppointment />
                    <ClientFormWithoutMakingAppointment />
                    <ClientFormWithoutMakingAppointment /> */}
                </div>
            </div>
        )
        
    }
}
