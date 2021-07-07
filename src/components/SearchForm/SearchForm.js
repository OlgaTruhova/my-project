import React from 'react';
import {DropDownListForSearchForm} from '../DropDownListForSearchForm/DropDownListForSearchForm';

export const SearchForm = ({services}) => {
    
    return (
        <form className='cearch-form'>
            <h3>Поиск:</h3>
            <input type='text' placeholder='Введите именя или фамилию' />
            <input type='text' placeholder='Введите адрес' />
            <select name='serviceSelect' id='serviceSelect'>
                {services.map((servis) => (<DropDownListForSearchForm servis = {servis} />))}
            </select>
            <button>Clear</button>
        </form>
    )
}