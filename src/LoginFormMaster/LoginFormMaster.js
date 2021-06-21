import React from 'react';

export default class LoginFormMaster extends React.Component {

    render () {

        return (
            <form className='wrapper-form-login'>
                <span>Вход...</span>
                <input type="text" name="name" placeholder="Введите e-mail" required />
                <input type="password" name="password" placeholder="Введите пароль" required />
                <button className='btn-login'>Вход</button>
            </form>
        )
    }
}