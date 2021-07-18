import React from 'react';
import {CardMaster} from '../components/CardMaster/CardMaster';
import {masters} from '../mock-data/masters';
import {SearchForm} from '../components/SearchForm/SearchForm';
import './ListOfMasters.css';

export default class ListOfMasters extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            services: ['Выберите услугу', 'Маникюр', 'Педикюр', 'Шугаринг', 'Коррекция, окрашивание бровей', 'Наращивание ресниц', 'Прически и укладка волос', 'Стрижки, окрашивание волос'],
            // masters: masters,
            cearchData: null,
        }
    }

    changeHandler = ({target: {value}}) => {
        this.setState({cearchData: value.toLowerCase()},
        () => {console.log(this.state)}  
        ) 
    }

    render () {

        const masters = this.props.masters; // 

        const mastersFilter = masters.filter(master => 
            master.firstname.toLowerCase().includes(this.state.cearchData) ||
            master.lastname.toLowerCase().includes(this.state.cearchData) ||
            master.address.toLowerCase().includes(this.state.cearchData) ||
            master.services.join(',').toLowerCase().includes(this.state.cearchData)
        );

        return (
            <div className='wrapper-list-ofmasters'>
                <SearchForm 
                    services={this.state.services} 
                    changeHandler={this.changeHandler} 
                />
                {this.state.cearchData === null ? 
                masters.map(({id, ...masterInfo}) => (<CardMaster key={id} {...masterInfo} clickMaster={this.props.clickMaster} /> )) : 
                mastersFilter.map(({id, ...masterInfo}) => (<CardMaster key={id} {...masterInfo} clickMaster={this.props.clickMaster} /> ))}
            </div>
        )
    }
}

