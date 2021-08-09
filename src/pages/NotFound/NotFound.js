import React from 'react'
import Error404 from '../../404error.jpg';
import '../../App.css';

export const NotFound = () => {

    return (
        <div className='not-found-page'>
            <img src={Error404} alt='img' className='error' />
        </div>
    )
}
