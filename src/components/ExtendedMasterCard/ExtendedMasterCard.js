import React from 'react';
import {CalendarReact} from '../CalendarReact/CalendarReact';
import userImage from '../../user-png.png';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase';
import './ExtendedMasterCard.css';

export const ExtendedMasterCard = ({masterInfo, changeHandlerDate, changeHandlerTime, clickDate}) => {

    // const masterTarget = this.props.masterInfo;

    return (
        <div className='extended-master-card'>
            <div className='extended-master-card__info'>
                <div className='extended-master-card__img'>
                    <img src={userImage} alt='img' />
                </div>
                <div className='extended-master-card__text'>
                    <div>{masterInfo.firstname} {masterInfo.lastname}</div>
                    <div>{masterInfo.tel}</div>
                    {/* <div>{masterTarget.services.join(', ')}</div> */}
                    <div>{masterInfo.address}</div>
                    <div>{masterInfo.email}</div>
                </div>
            </div>
            <CalendarReact 
                changeHandlerDate={changeHandlerDate} 
                clickDate={clickDate} 
                changeHandlerTime={changeHandlerTime}
            />
        </div>   
    )
}