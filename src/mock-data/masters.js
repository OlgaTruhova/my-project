import React from 'react';
import {firestore} from '../firebase/firebase';
import RegistrationFormMaster from '../components/RegistrationFormMaster/RegistrationFormMaster';


// export default class master extends React.Component {
//     state ={
//         masters: []
//     }

//     creatingArrayOfMasters = () => {
//         firestore.collection('masters').get().then(querySnapshot => {
//             const masters = querySnapshot.docs.map(doc => doc.data());
//             console.log(masters);

//             this.setState({masters: master})
//             console.log(this.state);
        
//         })
//     }

//     render () {
//         return (
//             {<RegistrationFormMaster masters={this.state.masters}/>}
//         )
//     }
// } 

// firestore.collection('appointment').get().then(querySnapshot => {
//     const masters = querySnapshot.docs.map(doc => doc.data());
//     console.log(masters);
// })


// firestore.collection('masters').get().then(querySnapshot => {
//     console.log(querySnapshot)
//     const masters = querySnapshot.docs.map(doc => doc.data());
//     return masters;
//     console.log(masters);
// })
// console.log(master);


export const masters = [
    {
        id: 1,
        firstname: 'Ольга',
        lastname: 'Иванова',
        password: '123456',
        tel: '+375(29)690-70-72',
        email: 'truhovaolga@gmail.com',
        address: 'г. Гомель, ул. Советская, 6',
        services: ['Маникюр', 'Педикюр']
    }, 
    {
        id: 2,
        firstname: 'Екатерина',
        lastname: 'Сидорова',
        password: '234567',
        tel: '+375(29)620-30-42',
        email: 'ekaterinasid@gmail.com',
        address: 'г. Гомель, ул. Жукова, д.10 , кв.11',
        services: ['Коррекция, окрашивание бровей']
    }, 
    {
        id: 3,
        firstname: 'Александр',
        lastname: 'Пушкин',
        password: '789456',
        tel: '+375(44)123-30-42',
        email: 'ivanp@gmail.com',
        address: 'г. Гомель, пр. Ленина, д.4 , кв.1',
        services: ['Шугаринг']
    }, 
    {
        id: 4,
        firstname: 'Ирина',
        lastname: 'Ирина',
        password: '456123',
        tel: '+375(33)333-30-55',
        email: 'irinaIrisha@mail.ru',
        address: 'г. Гомель, ул. Мазурова, д.33',
        services: ['Коррекция, окрашивание бровей', 'Наращивание ресниц']
    }, 
    {
        id: 5,
        firstname: 'Екатерина',
        lastname: 'Смирнова',
        password: '781053',
        tel: '+375(29)781-05-30',
        email: 'ekaterinasmirnova@mail.ru',
        address: 'г. Гомель, ул. 60 лет СССР, д.129 , кв.58',
        services: ['Стрижки, окрашивание волос', 'Прически и укладка волос']
    }, 
    {
        id: 6,
        firstname: 'Петр',
        lastname: 'Петров',
        password: '987654',
        tel: '+375(33)456-37-42',
        email: 'petro@gmail.com',
        address: 'г. Гомель, ул. Крестьянская, д.1',
        services: ['Маникюр', 'Педикюр']
    }, 
    {
        id: 7,
        firstname: 'Екатерина',
        lastname: 'Иванова',
        password: '6258746',
        tel: '+375(29)124-98-98',
        email: 'ekaterina@gmail.com',
        address: 'г. Гомель, ул. Интернациональная, д.8 , кв.101',
        services: ['Коррекция, окрашивание бровей', 'Наращивание ресниц']
    }, 
    {
        id: 8,
        firstname: 'Евгения',
        lastname: 'Бридж',
        password: '321789',
        tel: '+375(44)723-55-84',
        email: 'evgeshabrig@yandex.ru',
        address: 'г. Гомель, ул. Карповича, д.49',
        services: ['Маникюр', 'Педикюр']
    }, 
    {
        id: 9,
        firstname: 'Анастасия',
        lastname: 'Настя',
        password: '895421',
        tel: '+375(29)120-50-42',
        email: 'nastja@gmail.com',
        address: 'г. Гомель, пр. Ленина, д.58',
        services: ['Стрижки, окрашивание волос']
    }, 
    {
        id: 10,
        firstname: 'Ильдар',
        lastname: 'Шириязданов',
        password: '951753',
        tel: '+375(29)456-78-90',
        email: 'ildar@mail.ru',
        address: 'г. Гомель, пр. Победы, д.9',
        services: ['Стрижки, окрашивание волос']
    }, 
    {
        id: 11,
        firstname: 'Ольга',
        lastname: 'Трухова',
        password: '1208864',
        tel: '+375(29)690-70-72',
        email: 'truhovaolga911@gmail.com',
        address: 'г. Гомель, ул. Мележа, д.4 , кв.22',
        services: ['Коррекция, окрашивание бровей']
    }, 
    {
        id: 12,
        firstname: 'Ирина',
        lastname: 'Кривошеева',
        password: '9587463',
        tel: '+375(33)123-30-22',
        email: 'irinakrisha@mail.ru',
        address: 'г. Гомель, ул. Советская, д.159',
        services: ['Наращивание ресниц']
    }, 
    {
        id: 13,
        firstname: 'Наталья',
        lastname: 'Иванова',
        password: '912347',
        tel: '+375(44)788-99-77',
        email: 'natali@gmail.com',
        address: 'г. Гомель, ул. Сосновая, д.8 , кв.42',
        services: ['Наращивание ресниц', 'Коррекция, окрашивание бровей']
    }, 
    {
        id: 14,
        firstname: 'Анжелика',
        lastname: 'Варум',
        password: '9874123',
        tel: '+375(33)658-30-42',
        email: 'angelika@mail.ru',
        address: 'г. Гомель, ул. Жукова, д.42 , кв.44',
        services: ['Шугаринг']
    }, 
    {
        id: 15,
        firstname: 'Наталья',
        lastname: 'Мороз',
        password: '456879',
        tel: '+375(29)125-46-42',
        email: 'natalimoroz@gmail.com',
        address: 'г. Гомель, ул. МЖК "Солнечный", д.15 , кв.18',
        services: ['Прически и укладка волос']
    }, 

]