import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGu4bwkStu3D1B98Lo0gczwMK3hE28lOg",
    authDomain: "beautyservices-b4b5c.firebaseapp.com",
    projectId: "beautyservices-b4b5c",
    storageBucket: "beautyservices-b4b5c.appspot.com",
    messagingSenderId: "760951291548",
    appId: "1:760951291548:web:dc0af6779c9c6bcbcab759"
};

firebase.initializeApp(config);


export const firestore = firebase.firestore();
export const auth = firebase.auth();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});

export const createFirebaseMaster = async (master, payload = {}) => {

    if (!master) return;

    const masterRef = firestore.doc(`masters/${master.uid}`); //получаем объект, который позволяет получать данные 
    console.log(master.uid);

    const masterSnapShot = await masterRef.get(); // начинаем пользоваться пакетом функций
    console.log(masterSnapShot);
    
    if (!masterSnapShot.exists) {
        const {firstname, lastname, tel, email, adres, password,
            // services
        } = payload;
        console.log(payload);

        try {
            await masterRef.set({firstname, lastname, tel, email, adres, password,

                // services,
                ...payload
            })
        } catch (err) {
            console.log(err); //окошко с сообщением, что usera не существует
        }
    } 
    return masterRef;
};


export default firebase;