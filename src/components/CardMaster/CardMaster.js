import React from 'react';
import './CardMaster.css';


export const CardMaster = ({firstname, lastname, tel, services, address, email, clickMaster}) => {

    return (
        <div className='card-master'>
            <h1>{firstname} {lastname}</h1>
            <div>{tel}</div>
            <div>{services}</div>
            <div>{address}</div>
            <button value={email} className='card-master__btn' onClick={clickMaster}>Подробнее...</button>
        </div>
    )
}