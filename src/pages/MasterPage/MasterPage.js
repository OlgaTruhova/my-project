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
import './MasterPage.css';


class MasterP extends React.Component {

    state = {
        clickDate: '',
        clickTime: '',
        clientName: '',
        clientContact: '',
        appointmentClient: []
    }


    appointmentClient = async () => {
        const {currentMaster} = this.props;
        
        firestore.doc(`masters/${currentMaster.id}`).collection('appointment').get().then(querySnapshot => {
            const appointment = querySnapshot.docs.map(doc => doc.data());
            console.log(appointment); 
            
            const filterAppointmentClient = appointment.filter(appointment => appointment.clickDate === this.state.clickDate).sort((a,b) => b-a)

            this.setState({appointmentClient: filterAppointmentClient});
            console.log(this.state);
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
        () => {
            console.log(this.state)
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

    render () {
        const {currentMaster} = this.props;

        return (

            <div className='master-page'>
               
                {currentMaster ? 
                    (<>
                        {currentMaster ? 
                        (<div className='master-page__log-out' onClick={() => auth.signOut()}>
                            <img src={buttonClose} alt='img' className='master-page__log-out_button-close' />
                        </div>) : null}
                        <div className='wrapper-extended-master-card'>
                            <ExtendedMasterCard 
                                masterInfo={currentMaster}
                                changeHandlerDate={this.changeHandlerDate}
                                changeHandlerTime={this.changeHandlerTime}
                                clickDate={this.state.clickDate} 
                            />
                        </div>
                        
                        {/* {this.state.clickDate ?  */}
                        <ClientRegistration 
                            appointmentClient={this.state.appointmentClient}
                            clickDate={this.state.clickDate} 
                        /> 
                        {/* : null} */}

                        {/* {this.state.clickTime ? 
                            <RegistrationFormForTheMaster 
                                handlerChange={this.handlerChange} 
                                clientName={this.state.clientName}
                                clientContact={this.state.clientContact}
                                cancellationOfRegistration={this.cancellationOfRegistration}
                                hendleSubmit={this.hendleSubmit}
                            /> : null} */}
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