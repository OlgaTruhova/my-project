import React from 'react';
import {FormInput} from '../FormInput/FormInput';
import {auth} from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import './LoginFormMaster.css';
import '../../styleBtn.css';

export default class LoginFormMaster extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handlerChange = ({target: {name, value}}) => {
        this.setState({[name]: value},
        () => {}) 
    }

    handlerSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;
        const {history} = this.props;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            this.props.history.push('/formaster');
        
        } catch (err) {
            console.log(err);
            if (err.code === 'auth/wrong-password') {
                alert('Вы ввели неверный пароль')
            } else if (err.code === 'auth/user-not-found') {
                alert('Вы ввели неверный email либо Вы не зарегистрированы')
            } else if (err.code === 'auth/too-many-requests') {
                alert('Доступ к этой учетной записи временно заблокирован. Вы можете повторить попытку позже')
            }
        }
    }

    render () {

        return (
            <form className='wrapper-form-login' onSubmit={this.handlerSubmit}>
                <h1>Вход...</h1>
                <FormInput 
                    type='email' 
                    name='email' 
                    placeholder='Введите email' 
                    value = {this.state.email}
                    required 
                    handlerChange={this.handlerChange} 
                />
                <FormInput 
                    type='password' 
                    name='password' 
                    placeholder='Введите пароль' 
                    value={this.state.password}
                    required 
                    handlerChange={this.handlerChange} 
                />
                <button className='style-btn'>Вход</button> 
            </form>
        )
    }
}