import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className='App'>
                <div className='App-wrapper'>
                    <div className='App-header'>
                        <div className='for-client'><span>for</span> <span>КЛИЕНТ</span></div>
                        <div className='for-master'><span>for</span> <span>МАСТЕР</span></div>
                    </div>
                    <div className='App-main'>
                        <div className='wrapperForClient'>

                        </div>

                        <div className='wrapperForMaster'>
                            <nav className='login-registration-nav'>
                                <div>ВХОД</div>
                                <div>РЕГИСТРАЦИЯ</div>
                            </nav>
                           
                            <div className='login-registration-win'>
                                <div className='wrapperFormLogin'>
                                    <span>Login...</span>
                                    <input type="text" name="imy" placeholder="Введите e-mail" required />
                                    <input type="password" name="password" placeholder="Введите пароль" required />
                                    <button className='btn-login'>Вход</button>
                                </div>
                                {/* <div className='wrapperFormRegistration'>

                                </div> */}
                           </div>

                        </div>
                    </div>                 
                </div>
            </div>
        )
    }
}

