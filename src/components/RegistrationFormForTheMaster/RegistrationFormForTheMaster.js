import React from 'react';
import {FormInput} from '../../components/FormInput/FormInput';
import './RegistrationFormForTheMaster.css';

export const RegistrationFormForTheMaster = ({handlerChange, clientName, clientContact, cancellationOfRegistration, hendleSubmit}) => {

    return (
        <div className='wrapper-registr-form-for-the-master'>
            <div className='registr-form-for-the-master'>
                <h1 className='registr-form-for-the-master__text'>Введите данные</h1>
                <FormInput 
                    type='text' 
                    name='clientName' 
                    placeholder='Имя' 
                    value = {clientName}
                    required 
                    handlerChange={handlerChange} 
                    />
                <FormInput 
                    type='tel' 
                    name='clientContact' 
                    placeholder='Телефон' 
                    value={clientContact}
                    required 
                    handlerChange={handlerChange} 
                />
                <button className='style-btn' onClick={hendleSubmit}>Записать</button>
                <button className='style-btn' onClick={cancellationOfRegistration} >Отменить</button>
            </div>
        </div>
    )
}