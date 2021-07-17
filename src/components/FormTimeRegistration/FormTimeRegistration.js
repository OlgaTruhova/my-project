import React from 'react';
import './FormTimeRegistration.css';

const FormTimeRegistration = ({changeHandlerTime}) => {

    return (

        <div className='wrapper-form-time-registration'>
            <div className='form-time-registration'>
                <button value='8.00' onClick={changeHandlerTime}>8.00</button>
                <button value='10.00' onClick={changeHandlerTime}>10.00</button>
                <button value='12.00' onClick={changeHandlerTime}>12.00</button>
                <button value='15.00' onClick={changeHandlerTime}>15.00</button>
                <button value='17.00' onClick={changeHandlerTime}>17.00</button>
            </div>
        </div>        
    )
}

export {FormTimeRegistration}