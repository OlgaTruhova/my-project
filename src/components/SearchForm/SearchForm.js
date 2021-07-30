import React from 'react';
import imgCearch from '../SearchForm/icons-search.png';
import './SearchForm.css';


export const SearchForm = ({changeHandler}) => {

    return (
        <form className='cearch-form'>
            <img src={imgCearch} alt='img' className='cearch-form__imgCearch' />
            <input type='text' name='cearchName' className='cearch-form__input' onChange={changeHandler}/>
            <button className='cearch-form__btn'>Очистить</button>
        </form>
    )
}