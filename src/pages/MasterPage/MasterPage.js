import React from 'react';
import RegistrationFormMaster from '../../components/RegistrationFormMaster/RegistrationFormMaster';
import {createFirebaseMasterAppointment} from '../../firebase/firebase';
import {ExtendedMasterCard} from '../../components/ExtendedMasterCard/ExtendedMasterCard';
// import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase';
import { withRouter } from 'react-router';
import {RegistrationFormForTheMaster} from '../../components/RegistrationFormForTheMaster/RegistrationFormForTheMaster';
import buttonClose from '../../button-close.svg';
import './MasterPage.css';


class MasterP extends React.Component {

    state ={
        clickDate: '',
        clickTime: '',
        clientName: '',
        clientContact: ''
    }

    changeHandlerDate  = (date) => {
        this.setState({clickDate: date.toLocaleDateString("en-GB")},
        () => {})
    }

    changeHandlerTime  = (e) => {
        this.setState({clickTime: e.target.value},
        () => {})
    }

    handlerChange = ({target: {name, value}}) => {
        this.setState({[name]: value},
        () => {
            console.log(this.state)
        }) 
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
        console.log(currentMaster);

        try {
            await createFirebaseMasterAppointment({currentMaster, clickDate, clickTime, clientName, clientContact});
           
            // this.setState({firstname: '', lastname: '', password: '', confirmPassword: '', email: '', tel: '', address: ''});

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
                        <ExtendedMasterCard 
                            masterInfo={currentMaster}
                            changeHandlerDate={this.changeHandlerDate}
                            changeHandlerTime={this.changeHandlerTime}
                            clickDate={this.state.clickDate}
                            
                        />
                        {this.state.clickTime ? 
                            <RegistrationFormForTheMaster 
                                handlerChange={this.handlerChange} 
                                clientName={this.state.clientName}
                                clientContact={this.state.clientContact}
                                cancellationOfRegistration={this.cancellationOfRegistration}
                                hendleSubmit={this.hendleSubmit}
                            /> : null}
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