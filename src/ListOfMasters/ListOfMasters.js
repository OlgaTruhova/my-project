import React from 'react';
import {CardMaster} from '../components/CardMaster/CardMaster';
import {masters} from '../mock-data/masters';
import {SearchForm} from '../components/SearchForm/SearchForm';
import './ListOfMasters.css';

export default class ListOfMasters extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            services: ['Маникюр', 'Педикюр', 'Шугаринг', 'Коррекция, окрашивание бровей', 'Наращивание ресниц', 'Прически и укладка волос', 'Стрижки, окрашивание волос']
        }
    }

    render () {
        return (
            <div className='wrapper-list-ofmasters'>
                <SearchForm services={this.state.services} />
                {masters.map((masterInfo) => (<CardMaster {...masterInfo} /> ))}
            </div>
        )
    }
}

