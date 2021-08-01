import React from 'react';
import {CalendarReact} from '../CalendarReact/CalendarReact';
import userImage from '../../user-png.png';
import {auth} from '../../firebase/firebase';
import './ExtendedMasterCard.css';

export const ExtendedMasterCard = ({masterInfo, changeHandlerDate, changeHandlerTime, clickDate, appointmentClient}) => {

    return (
        <div className='extended-master-card'>
            <div className='extended-master-card__info'>
                <div className='extended-master-card__img'>
                    <img src={userImage} alt='img' />
                </div>
                <div className='extended-master-card__text'>
                    <div>{masterInfo.firstname} {masterInfo.lastname}</div>
                    <div>{masterInfo.tel}</div>
                    <div>{masterInfo.services}</div>
                    <div>{masterInfo.address}</div>
                    <div>{masterInfo.email}</div>
                </div>
            </div>
            <CalendarReact 
                changeHandlerDate={changeHandlerDate} 
                clickDate={clickDate} 
                changeHandlerTime={changeHandlerTime}
                appointmentClient={appointmentClient}
            />
        </div>   
    )
}