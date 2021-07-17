import React from 'react';
import ListOfMasters from '../../ListOfMasters/ListOfMasters';
import {ExtendedMasterCard} from '../../components/ExtendedMasterCard/ExtendedMasterCard';
import {masters} from '../../mock-data/masters';
import './ClientPage.css';

export default class ClientPage extends React.Component {

    state = {
        masters: masters,
        masterTarget: null,
    }

    clickMaster = (e) => {

        this.state.masters.forEach((master) => {
            if (master.email === e.target.value) {
                this.setState({masterTarget: master},
                () => {console.log(this.state)})
            }
        })  
    }

    render () {

        
        return (
            <div className='client-page'>
                <ListOfMasters clickMaster={this.clickMaster} masters={this.state.masters} />
                <div className='client-page__extended-master-card'>
                {this.state.masterTarget ? <ExtendedMasterCard masterInfo={this.state.masterTarget} /> : null} 
                </div>
            </div>
        )
    }

}