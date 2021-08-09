import React from 'react';
import ListOfMasters from '../../ListOfMasters/ListOfMasters';
import {ExtendedMasterCard} from '../../components/ExtendedMasterCard/ExtendedMasterCard';
import {RegistrationFormForTheMaster} from '../../components/RegistrationFormForTheMaster/RegistrationFormForTheMaster';
import {createFirebaseMasterAppointment} from '../../firebase/firebase';
import {firestore} from '../../firebase/firebase';
import store from '../../redux/store';
import './ClientPage.css';

export default class ClientPage extends React.Component {

    state = {
        masterTarget: null,
        clickDate: '',
        clickTime: '',
        clientName: '',
        clientContact: '',
        appointmentClient: []
    }

    clickMaster = (e) => {
        const masters = store.getState().masters.currentListOfMasters; 

        masters.forEach((master) => {
            if (master.email === e.target.value) {
                this.setState({masterTarget: master})
                this.setState({clickDate: '', clickTime: ''})
            }
        })  
    }

    appointmentClient = async () => {
        const {masterTarget} = this.state;
        
        firestore.doc(`masters/${masterTarget.id}`).collection('appointment').get().then(querySnapshot => {
            const appointment = querySnapshot.docs.map(doc => doc.data());
            
            const filterAppointmentClient = appointment.filter(appointment => appointment.clickDate === this.state.clickDate)

            this.setState({appointmentClient: filterAppointmentClient});
        })
    }

    changeHandlerDate  = (date) => {
        this.setState({clickDate: date.toLocaleDateString("en-GB")},
        (this.appointmentClient))
    }

    changeHandlerTime  = (e) => {
        this.setState({clickTime: e.target.value},
        () => {})
    }

    handlerChange = ({target: {name, value}}) => {
        this.setState({[name]: value},
        () => {}) 
    }
    
    cancellationOfRegistration = () => {
        this.setState({clickDate: '', clickTime: '', clientName: '', clientContact: ''},
        () => {}) 
    }

    hendleSubmit = async (e) => {
        e.preventDefault();

        const {clickDate, clickTime, clientName, clientContact} = this.state;
        const currentMaster = this.state.masterTarget;

        try {
            await createFirebaseMasterAppointment({currentMaster, clickDate, clickTime, clientName, clientContact},
            this.setState({clickDate: '', clickTime: '', clientName: '', clientContact: ''}));
        } catch (err) {
            console.log(err);
        }
    }

    render () {
        
        return (
            <div className='client-page'>
                <ListOfMasters clickMaster={this.clickMaster} />

                <div className='client-page__extended-master-card'>
                    {this.state.clickTime ? 
                        <div className='wrapper-registr-form-for-the-client'>
                            <RegistrationFormForTheMaster 
                                handlerChange={this.handlerChange} 
                                clientName={this.state.clientName}
                                clientContact={this.state.clientContact}
                                cancellationOfRegistration={this.cancellationOfRegistration}
                                hendleSubmit={this.hendleSubmit}
                            />
                        </div> :
                        <>
                         {this.state.masterTarget ? 
                            <ExtendedMasterCard 
                                masterInfo={this.state.masterTarget} 
                                clickDate={this.state.clickDate}
                                clickTime={this.clickTime}
                                changeHandlerDate={this.changeHandlerDate} 
                                changeHandlerTime={this.changeHandlerTime}
                                appointmentClient={this.state.appointmentClient}
                            /> 
                        : null} 
                        </>
                    }
                </div>
            </div>
        )
    }

}