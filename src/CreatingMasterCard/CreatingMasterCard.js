import React from 'react';
import './CreatingMasterCard.css';

export default class CreatingMasterCard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            
            masters: [
                {
                firstname: 'Ольга',
                lastname: 'Иванова',
                password: '123456',
                tel: '+375(29)690-70-72',
                email: 'truhovaolga911@gmail.com',
                adres: 'г. Гомель, ул. Советская, 6',
                services: ['Маникюр', 'Педикюр']
            }, 
            {firstname: 'Gala'}]
        }
    }

    mastersData = ({master}) => {
        console.log('Hello');
    //    let allMasters = [...this.state.masters];
       let allMasters = this.state.masters.push({master});
       this.setState({'masters': allMasters});
       console.log(this.state);
    }

    render () {
        
        // const styling = {
        //     border: '10px solid red',
        //     backgroundColor: "orang"
        // }
        
        return (

            <>
            <div className='master'>
              
                {this.state.masters.map(master => master.firstname)}
            </div>  


            </>
        )
    }
}

