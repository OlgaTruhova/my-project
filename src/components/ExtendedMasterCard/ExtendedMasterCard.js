import React from 'react';
import CalendarReact from '../CalendarReact/CalendarReact';
import './ExtendedMasterCard.css';

export default class ExtendedMasterCard extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            date: '',
        }
    }

  
render () {
    return (
        <div className='wrapper-extended-master-card'>
            <div className='extended-master-card'>
                <div className='extended-master-card__info'>
                    <div className='extended-master-card__img'>
                        <img src='https://proprikol.ru/wp-content/uploads/2019/06/kartinki-krasivyh-devushek-skachat-besplatno-2.jpg' />
                    </div>
                    <div className='extended-master-card__text'>
                        <div>Фамилия, имя: Ольга Трухова</div>
                        <div>Моб.тел.: +375(29) 690-70-72</div>
                        <div>Оказываемые услуги: маникюр, педикюр</div>
                        <div>Адрес оказания услуги: ул. Мележа, д.4, кв.22</div>
                        <div>email: truhovaolga911@gmail.com</div>
                        {/* <div>Пароль: 123456</div> */}
                    </div>
                </div>
                <CalendarReact />
            </div>
            <div className='extended-master-card__request'>
                
            </div>
            
        </div>
    )
}
    
}