import React from 'react';
import {CardMaster} from '../components/CardMaster/CardMaster';
import {SearchForm} from '../components/SearchForm/SearchForm';
import store from '../redux/store';
import {setCurrentListOfMasters} from '../redux/actions';
import {firestore} from '../firebase/firebase';
import './ListOfMasters.css';

export default class ListOfMasters extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            cearchData: null,
            masters: [],
            mastersFilter: []
        }
    }

    changeHandler = ({target: {value}}) => {

        this.setState({cearchData: value.toLowerCase()},

        async () => {
            const {masters} = this.state;
            const mastersFilter = await masters.filter(master => 
                Object.values(master).join(', ').toLowerCase().includes(this.state.cearchData)
            )
            this.setState({mastersFilter: mastersFilter});
        },
            () => {}  
        ) 
    }

    componentDidMount () {

        firestore.collection('masters').get().then(querySnapshot => {
            const masters = querySnapshot.docs.map(doc => doc.data());
            store.dispatch(setCurrentListOfMasters(masters));
            const master = store.getState().masters.currentListOfMasters;           
            this.setState({masters: master});
        })
    }

    render () {

        const {masters, mastersFilter} = this.state;

        return (
            <div className='wrapper-list-ofmasters'>
                <SearchForm 
                    changeHandler={this.changeHandler} 
                />
                {this.state.cearchData === null ? 
                masters.map(({id, ...masterInfo}) => (<CardMaster key={id} {...masterInfo} clickMaster={this.props.clickMaster} /> )) : 
                mastersFilter.map(({id, ...masterInfo}) => (<CardMaster key={id} {...masterInfo} clickMaster={this.props.clickMaster} /> ))}
            </div>
        )
    }
}