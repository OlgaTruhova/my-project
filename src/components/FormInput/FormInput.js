import React from 'react';

export const FormInput = ({label, name, value, changeHandler, ...inputProps}) => {
    return (
        <>
            {label ? (<label className='form-input__label' htmlFor={`form${name}`}>{label}</label>) : null}
            <input className='form-input__field' 
                id={`form${name}`} 
                name = {name}
                onChange={changeHandler}
                {...inputProps}
                />
        </>
    )

};