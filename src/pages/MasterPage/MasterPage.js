import React from 'react';
import RegistrationFormMaster from '../../components/RegistrationFormMaster/RegistrationFormMaster';
import ExtendedMasterCard from '../../components/ExtendedMasterCard/ExtendedMasterCard';
import { withRouter } from 'react-router';
import './MasterPage.css';


const MasterP = ({history, currentMaster}) => {

    // if(currentMaster) {
    //     history.goBack();
    // }

    return (
        <div className='master-page'>
            {/* <ExtendedMasterCard /> */}
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
        </div>
    )
    
}

const MasterPage = withRouter(MasterP);
export {MasterPage};