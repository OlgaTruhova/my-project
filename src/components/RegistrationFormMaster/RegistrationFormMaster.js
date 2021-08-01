import React from 'react';
import {FormInput} from '../FormInput/FormInput';
import {FormInputServices} from '../FormInputServices/FormInputServices';
import {auth, createFirebaseMaster} from '../../firebase/firebase';
import {firestore} from '../../firebase/firebase';
import './RegistrationFormMaster.css';
import { connect } from 'react-redux';
import store from '../../redux/store';
import {setCurrentListOfMasters} from '../../redux/actions'

class RegistrationFormMaster extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            confirmPassword: '',
            tel: '',
            email: '',
            address: '',
            services: [], // при пустом массиве сделать выпадающее окно, что надо выбрать хоть одну услугу!
        }
    }

    handlerChange = ({target: {name, value}}) => {
        this.setState({[name]: value},
        () => {}  
        ) 
    }

    changeHandlerServis = (name, value) => {
        this.setState({[name]: value},
        () => {}  
        ) 
    }

    creatingListOfServices = (e) => {
        let servicesOfMaster = [...this.state.services];
        let res = servicesOfMaster.find(servis => servis === e.target.value);
        if (e.target.checked === true) {
            if (res === undefined) {
                servicesOfMaster.push(`${e.target.value}. `);
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

        this.changeHandlerServis('services', [...servicesOfMaster]);
    }

    hendleSubmit = async (e) => {
        e.preventDefault();

        const {firstname, lastname, password, confirmPassword, email, tel, address, services} = this.state;

        if(password !== confirmPassword) {
            alert('Пароль не совпадает!');
            return;
        }

        if (services.length === 0) {
            alert('Выберите услуги, которые Вы будетет оказывать');
            return;
        }

        try {
            const master = await auth.createUserWithEmailAndPassword(email, password);
            await createFirebaseMaster(master.user, {firstname, lastname, tel, address, email, password, services});
            
            await firestore.collection('masters').get().then(querySnapshot => {
                const masters = querySnapshot.docs.map(doc => doc.data());
                store.dispatch(setCurrentListOfMasters(masters));
            })


        } catch (err) {
            console.log(err);
            if (err.code === 'auth/weak-password') {
                alert('Пароль должен состоять не менее чем из 6 символов')
            }
        }
    }

    render () {
        const {firstname, lastname, password, confirmPassword, email, tel, address} = this.state;

        return (
            <form className='wrapper-form-registration' onSubmit={this.hendleSubmit}>      
                <h1>Регистрация</h1>
               
                    <div className='form-master'>
                        <FormInput 
                            type='text' 
                            name='firstname' 
                            label='Имя' 
                            placeholder='Введите имя' 
                            value = {firstname}
                            required 
                            onChange={this.handlerChange} />
                        <FormInput 
                            type='text' 
                            name='lastname' 
                            label='Фамилия' 
                            placeholder='Введите фамилию' 
                            value={lastname}
                            required 
                            onChange={this.handlerChange} />
                    </div>
                    <div className='form-master'>
                        <FormInput 
                            type='password' 
                            name='password' 
                            label='Пароль' 
                            placeholder='Введите пароль' 
                            value={password}
                            required 
                            onChange={this.handlerChange} />
                        <FormInput 
                            type='password' 
                            name='confirmPassword' 
                            label='Подтвердите пароль' 
                            placeholder='Подтвердите пароль' 
                            value={confirmPassword}
                            required 
                            onChange={this.handlerChange} />
                    </div>
                    <div className='form-master'>
                        <FormInput 
                            type='tel' 
                            name='tel' 
                            label='Мобильный телефон' 
                            // pattern='+375([0-9]{2})[0-9]{3}-[0-9]{2}-[0-9]{2}' 
                            placeholder='+375(00)-000-00-00' 
                            value={tel}
                            required 
                            onChange={this.handlerChange} />
                        <FormInput 
                            type='email' 
                            name='email' 
                            label='Email' 
                            placeholder='Введите email' 
                            value={email}
                            required 
                            onChange={this.handlerChange} />
                    </div>
                    <div className='form-master-address'> 
                        <FormInput 
                            type='text' 
                            name='address' 
                            label='Адрес оказания услуги' 
                            placeholder='Введите адрес' 
                            value={address}
                            required 
                            onChange={this.handlerChange} />
                    </div>
               
               
                <div className='services-master'>
                    <FormInputServices 
                        type='checkbox' name='manicure' label='Маникюр' value='Маникюр' 
                        onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='pedicure' label='Педикюр' value='Педикюр' 
                        onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='shugaring' label='Шугаринг' value='Шугаринг' 
                        onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='eyebrows' label='Коррекция, окрашивание бровей' 
                        value='Коррекция, окрашивание бровей' onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='eyelashes' label='Наращивание ресниц' value='Наращивание ресниц' 
                        onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='hairstyle' label='Прически и укладка волос' 
                        value='Прически и укладка волос' onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='ahaircut' label='Стрижки, окрашивание волос' 
                        value='Стрижки, окрашивание волос' onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='hairextension' label='Наращивание волос' 
                        value='Наращивание волос' onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='haircutbeardmustache' label='Стрижка бороды, усов' 
                        value='Стрижка бороды, усов' onChange={this.creatingListOfServices} />
                    <FormInputServices 
                        type='checkbox' name='dyeingbeardmustache' label='Окрашивание бороды, усов' 
                        value='Окрашивание бороды, усов' onChange={this.creatingListOfServices} />
                </div>
                <button className='style-btn-reg'>Зарегистрироваться</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    masters: state.masters.currentListOfMasters
},
()=>{console.log(state.masters.currentListOfMasters)});

export default connect(mapStateToProps)(RegistrationFormMaster);
