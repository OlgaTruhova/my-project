import React from 'react';
import './App.css';
import LoginFormMaster from "./LoginFormMaster/LoginFormMaster";
import RegistrationFormMaster from './RegistrationFormMaster/RegistrationFormMaster';
import CreatingMasterCard from './CreatingMasterCard/CreatingMasterCard';



export default class App extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            targetTextContent: 'ВХОД',

            firstname: '',
            lastname: '',
            password: '',
            tel: '',
            email: '',
            adres: '',
            services: []
        }
    }

    clickHandler = (e) => this.setState ({targetTextContent: e.target.textContent})

    changeHandler = (name, value) => {
        this.setState({[name]: value})
    }

    // formIsCompleted = () => {
    //     console.log(this.state);
    //     Object.values(this.state).some(vel => {
    //         console.log(vel === '');
    //         console.log(Object.values(this.state));
    //     })
    // }

    hendleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render () {

        const formRegistrationOrLogin = (
            <>
              {this.state.targetTextContent === 'ВХОД' ? <LoginFormMaster /> 
              : <RegistrationFormMaster changeHandler={this.changeHandler} services={this.state.services} hendleSubmit={this.hendleSubmit} formIsCompleted={this.formIsCompleted} />}
            </>
          )
        // const styleClass = {}

        return (
            <div className='App'>
                {/* <div className='beauty'><h1>beauty</h1></div> */}
                <div className='App-wrapper'>
                    <div className='App-header'>
                        <div className='for-client'><span>for</span> <span>КЛИЕНТ</span></div>
                        <div className='for-master'><span>for</span> <span>МАСТЕР</span></div>
                    </div>
                    <div className='App-main'>
                        <div className='wrapperForClient'>
                            <CreatingMasterCard />
                        </div>

                        <div className='wrapperForMaster'>
                            <nav className='login-registration-nav'>
                                <div onClick={this.clickHandler}>ВХОД</div>
                                <div onClick={this.clickHandler}>РЕГИСТРАЦИЯ</div>
                            </nav>
                            <div className='login-registration-win'>
                                {formRegistrationOrLogin}
                           </div>
                        </div>
                    </div>                 
                </div>
            </div>
        )
    }
}

