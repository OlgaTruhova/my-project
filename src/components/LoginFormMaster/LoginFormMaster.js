import React from 'react';
// import { withRouter } from 'react-router';
import {FormInput} from '../FormInput/FormInput';
import {auth} from '../../firebase/firebase';
import './LoginFormMaster.css';
import '../../styleBtn.css';

export default class LoginFormMaster extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handlerChange = ({target: {name, value}}) => {
        this.setState({[name]: value},
        () => {console.log(this.state)}  
        ) 
    }

    handlerSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state);

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (err) {
            console.log(err);
        }
        // this.setState({email: '', password: ''})
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