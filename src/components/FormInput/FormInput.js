import React from 'react';
import { withRouter } from 'react-router';
import './FormInput.css';

export const FormInp = ({label, name, handlerChange, ...inputProps}) => {
    
    return (
        <div className='form-input'>
            {label ? (<label className='form-input__label' htmlFor={`form${name}`}>{label}</label>) : null}
            <input className='form-input__input' 
                id={`form${name}`}
                name = {name}
                onChange={handlerChange}
                {...inputProps}
            />
        </div>
    )
};

const FormInput = withRouter(FormInp);
export {FormInput};