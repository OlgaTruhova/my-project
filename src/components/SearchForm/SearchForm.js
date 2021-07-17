import React from 'react';
import {DropDownListForSearchForm} from '../DropDownListForSearchForm/DropDownListForSearchForm';
import imgCearch from '../SearchForm/icons-search.png';
import './SearchForm.css';


export const SearchForm = ({services, changeHandler}) => {

    return (
        <form className='cearch-form'>
            <img src={imgCearch} alt='img' className='cearch-form__imgCearch' />
            <input type='text' name='cearchName' placeholder='Введите именя или фамилию' onChange={changeHandler}/>
            <select name='serviceSelect' id='serviceSelect' onChange={changeHandler}>
                {services.map((servis) => (<DropDownListForSearchForm servis = {servis} />))}
            </select>
            <button>Очистить</button>
        </form>
    )
}