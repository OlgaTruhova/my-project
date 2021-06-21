import React from 'react';
import {FormInput} from '../components/FormInput/FormInput';
import {FormInputServices} from '../components/FormInputServices/FormInputServices';
import './RegistrationFormMaster.css';
import '../App.css';


export default class RegistrationFormMaster extends React.Component {

    changeHandler = (e) => {
        this.props.changeHandler(e.target.name, e.target.value)
    }

    creatingListOfServices = (e) => {
        let servicesOfMaster = [...this.props.services];
        let res = servicesOfMaster.find(servis => servis === e.target.value);
        if (e.target.checked === true) {
            if (res === undefined) {
                servicesOfMaster.push(e.target.value);
            }
        } else {
            if (res === e.target.value) {
                servicesOfMaster.forEach((servis, i) => {
                    if (servis === res){
                        servicesOfMaster.splice(i, 1);
                    }
                })
            }
        }

        this.props.changeHandler('services', [...servicesOfMaster]);
    }

    render () {

        return (
            <div className='registration-form-master'>
                <span>Регистрация</span>
                    <div className='wrapper-registration-form-master'>
                        <form className='registration-form-fields' onSubmit={this.props.hendleSubmit}>      
                            <FormInput type='text' name='firstname' label='*Имя' placeholder='Введите имя' required changeHandler={this.changeHandler} />
                            <FormInput type='text' name='lastname' label='*Фамилия' placeholder='Введите фамилию' required changeHandler={this.changeHandler} />
                            <FormInput type='password' name='password' label='*Пароль' placeholder='Введите пароль' required changeHandler={this.changeHandler} />
                            <FormInput type='tel' name='tel' label='*Мобильный телефон' pattern='+375([0-9]{2})[0-9]{3}-[0-9]{2}-[0-9]{2}' placeholder='+375(00)-000-00-00' required changeHandler={this.changeHandler} />
                            <FormInput type='email' name='email' label='*Email' placeholder='Введите email' required changeHandler={this.changeHandler} />
                            <FormInput type='text' name='adres' label='*Адрес оказания услуги' placeholder='Введите адрес' required changeHandler={this.changeHandler} />
                             
                            <div className='services-master'>
                                <FormInputServices type='checkbox' name='manicure' label='Маникюр' value='Маникюр' onChange={this.creatingListOfServices} />
                                <FormInputServices type='checkbox' name='pedicure' label='Педикюр' value='Педикюр' onChange={this.creatingListOfServices} />
                                <FormInputServices type='checkbox' name='shugaring' label='Шугаринг' value='Шугаринг' onChange={this.creatingListOfServices} />
                                <FormInputServices type='checkbox' name='eyebrows' label='Коррекция, окрашивание бровей' value='Коррекция, окрашивание бровей' onChange={this.creatingListOfServices} />
                                <FormInputServices type='checkbox' name='eyelashes' label='Наращивание ресниц' value='Наращивание ресниц' onChange={this.creatingListOfServices} />
                                <FormInputServices type='checkbox' name='hairstyle' label='Прически и укладка волос' value='Прически и укладка волос' onChange={this.creatingListOfServices} />
                                <FormInputServices type='checkbox' name='ahaircut' label='Стрижки, окрашивание волос' value='Стрижки, окрашивание волос' onChange={this.creatingListOfServices} />
                            </div>
                            <button className='btn-registr' onClick={this.props.formIsCompleted}>Зарегистрироваться</button>
                        </form>
                    </div>
            </div>
        )
    }
}