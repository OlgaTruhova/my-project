import React from 'react';
import { withRouter } from 'react-router';
import LoginFormMaster from '../../components/LoginFormMaster/LoginFormMaster';
import './HomePage.css';


const HomeP = ({history, currentMaster}) => {

    // if(currentMaster) {
    //     history.goBack();
    // }

    return (
        <div className='home-page'>
            <div className='home-page__welcome'>
                <h1>Добрый вечер!</h1>
                <h2>Рады приветствовать Вас на данном сайте!</h2>
                <p>Если Вы зашли в качестве клиента, то перейдите на страницу for КЛИЕНТ.</p> 
                <p>Если Вы зашли в качестве мастера по оказанию услуг и уже зарегистрированы, то посетите свой аккаунт, пройдите авторизацию.</p>
                <p>Если вы посетили сайт в качестве мастера по оказанию услуг и впервые на сайте, перейдите на страницу for МАСТЕР.</p> 
            </div>
            <div className='home-page__login'>
                <LoginFormMaster />
            </div>
        </div>
    )
}

const HomePage = withRouter(HomeP);
export {HomePage}