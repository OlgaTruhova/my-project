import React from 'react';
import './FormInputServices.css';


export const FormInputServices = ({label, name, creatingListOfServices, ...inputProps}) => {

    return (
        <div className='form-inputserv'>
            <input className='form-inputserv__field' 
                id={`form${name}`}
                onChange={creatingListOfServices}
                {...inputProps}/>
            {label ? (<label className='form-inputserv__label' htmlFor={`form${name}`}>{label}</label>) : null}
        </div>
    )
};