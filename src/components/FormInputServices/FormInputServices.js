import React from 'react';

export const FormInputServices = ({label, name, value, creatingListOfServices, ...inputProps}) => {

    return (
        <>
            <input className='form-input__field' 
                id={`form${name}`} 
                onChange={creatingListOfServices}
                value={value}
                {...inputProps}/>
            {label ? (<label className='form-input__label' htmlFor={`form${name}`}>{label}</label>) : null}
        </>
    )
};