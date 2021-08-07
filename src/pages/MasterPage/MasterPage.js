import React from 'react';
import RegistrationFormMaster from '../../components/RegistrationFormMaster/RegistrationFormMaster';
import {createFirebaseMasterAppointment} from '../../firebase/firebase';
import {ExtendedMasterCard} from '../../components/ExtendedMasterCard/ExtendedMasterCard';
import {auth} from '../../firebase/firebase';
import { withRouter } from 'react-router';
import {RegistrationFormForTheMaster} from '../../components/RegistrationFormForTheMaster/RegistrationFormForTheMaster';
import ClientRegistration from '../../components/ClientRegistration/ClientRegistration';
import buttonClose from '../../button-close.svg';
import {firestore} from '../../firebase/firebase';
import {deletingFirebaseAppointment} from '../../firebase/firebase';
import './MasterPage.css';


class MasterP extends React.Component {

    state = {
        clickDate: '',
        clickTime: '',
        clientName: '',
        clientContact: '',
        appointmentClient: [],
    }


    appointmentClient = () => {
        const {currentMaster} = this.props;
        
        firestore.doc(`masters/${currentMaster.id}`).collection('appointment').get().then(querySnapshot => {
            const appointment = querySnapshot.docs.map(doc => doc.data());
            const filterAppointmentClient = appointment.filter(appointment => appointment.clickDate === this.state.clickDate);
            this.setState({appointmentClient: filterAppointmentClient});
        }) 
    }

    changeHandlerDate  = (date) => {
        this.setState({clickDate: date.toLocaleDateString("en-GB")},
        (this.appointmentClient))
        this.setState({clickTime: ''})
    }

    changeHandlerTime  = (e) => {
        this.setState({clickTime: e.target.value},
        () => {
            console.log(this.state)
        })
    }

    handlerChange = ({target: {name, value}}) => {
        this.setState({[name]: value},
        () => {}) 
    }
    
    cancellationOfRegistration = () => {
        this.setState({clickDate: '', clickTime: '', clientName: '', clientContact: ''},
        () => {
            // console.log(this.state)
        }) 
    }

    hendleSubmit = async () => {
        
        const {clickDate, clickTime, clientName, clientContact} = this.state;
        const {currentMaster} = this.props;

        try {
            await createFirebaseMasterAppointment({currentMaster, clickDate, clickTime, clientName, clientContact},
            this.setState({clickDate: '', clickTime: '', clientName: '', clientContact: ''}));
        } catch (err) {
            console.log(err);
        }
    }

    deletingAppointment = async (e) => {
        const {currentMaster} = this.props;
        const {clickDate} = this.state;
        const time = await e.target.parentElement.value;   

        try {
            await deletingFirebaseAppointment({currentMaster, clickDate, time});
            this.setState({clickDate: ''})
        } catch (err) {
            console.log(err);
        }

             
    }

    render () {
        const {currentMaster} = this.props;
        const {clickTime} = this.state;

        return (

            <div className='master-page'>
               
                {currentMaster ? 
                    (<>
                        {currentMaster ? 
                            (<div className='wrapper_master-page__log-out'>
                                <div className='master-page__log-out' onClick={() => auth.signOut()}>
                                    <img src={buttonClose} alt='img' className='master-page__log-out_button-close' />
                                </div> 
                            </div>) : null
                        }
                        <div className='wrapper-extended-master-card'>
                            <ExtendedMasterCard 
                                masterInfo={currentMaster}
                                changeHandlerDate={this.changeHandlerDate}
                                changeHandlerTime={this.changeHandlerTime}
                                clickDate={this.state.clickDate} 
                                appointmentClient={this.state.appointmentClient}
                            />
                        </div>
                        
                        <div className='wrapper-form'>
                            {clickTime ?
                                <div className='wrapper-registr-form-for-the-master'>
                                    <RegistrationFormForTheMaster 
                                        handlerChange={this.handlerChange} 
                                        clientName={this.state.clientName}
                                        clientContact={this.state.clientContact}
                                        cancellationOfRegistration={this.cancellationOfRegistration}
                                        hendleSubmit={this.hendleSubmit}
                                        data={this.state.data}
                                        clickDate={this.state.clickDate}
                                    />
                                </div> :
                                
                                (<ClientRegistration 
                                    appointmentClient={this.state.appointmentClient}
                                    clickDate={this.state.clickDate} 
                                    changeHandlerTime={this.changeHandlerTime}
                                    deletingAppointment={this.deletingAppointment}
                                />)
                            }
                        </div>
                       
                    </>) : 
    
                    (<>
                        <div className='master-page__text'>
                            <h1>
                                Здравствуйте!
                            </h1>
                            <p>
                                Если Вы хотите зарегистрироваться на данном сайте в качестве мастера по оказанию услуг красоты, заполните форму.
                            </p>
                        </div>
                        <div className='master-page__registratin'>  
                            <RegistrationFormMaster />
                        </div>
                    </>)
                }
            </div>
        )
    }
}

const MasterPage = withRouter(MasterP);
export {MasterPage};