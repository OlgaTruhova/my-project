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
    // console.log(master);

    if (!master) return;

    const userRef = firestore.doc(`masters/${master.uid}`);
    console.log(userRef);
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
    console.log(currentMaster.id);

    // if (!master) return;

    const userRef = firestore.doc(`masters/${currentMaster.id}`).collection(`appointment`);
    const userSnapShot = await userRef.get(); 
    console.log(userRef);
    console.log(userSnapShot);
   
    if (!userSnapShot.exists) {
        try {
            await userRef.set({ clickDate, clickTime, clientName, clientContact})
        } catch (err) {
            console.log(err); //прописать ошибки
        }
    } 

    return userRef;
};


export default firebase;