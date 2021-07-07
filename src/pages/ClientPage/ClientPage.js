import React from 'react';
import ListOfMasters from '../../ListOfMasters/ListOfMasters';
import ExtendedMasterCard from '../../components/ExtendedMasterCard/ExtendedMasterCard';
import './ClientPage.css';

export const ClientPage = () => {
    return (
        <div className='client-page'>
            <ListOfMasters />
            <div className='client-page__extended-master-card'>
                {/* <ExtendedMasterCard /> */}
            </div>
        </div>
    )
}