import React from 'react';
import './CardMaster.css';


export const CardMaster = ({firstname, lastname, tel, services, adres}) => {
    return (
        <div className='card-master'>
            <h1>{firstname} {lastname}</h1>
            <div>{tel}</div>
            <div>{services.join('; ')}</div>
            <div>{adres}</div>
            <button className='card-master__btn'>Подробнее...</button>
        </div>
    )
}