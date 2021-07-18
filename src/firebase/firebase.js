import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'

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
export const database = firebase.database();


export const createFirebaseMaster = async (master, payload = {}) => {

    if (!master) return;

    const userRef = firestore.doc(`masters/${master.uid}`);
    const userSnapShot = await userRef.get(); 
   
    if (!userSnapShot.exists) {
        try {
            await userRef.set({id: master.uid, ...payload})
        } catch (err) {
            console.log(err); //прописать ошибки
        }
    } 

    return userRef;
};

export const createFirebaseMasterAppointment = async ({currentMaster, clickDate, clickTime, clientName, clientContact}) => {

    if (!currentMaster.id) return;

    const userRef = firestore.doc(`masters/${currentMaster.id}`);
    const userSnapShot = await userRef.get(); 

    if (userSnapShot.id === currentMaster.id) {

        try {
            console.log(true);
            await userRef.collection('appointment').add({clickDate, clickTime, clientName, clientContact})
        } 
        catch (err) {
            console.log(err); //прописать ошибки
        }
    } 

    return userRef;
};


export default firebase;