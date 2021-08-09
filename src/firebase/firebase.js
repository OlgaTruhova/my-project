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
            console.log(err);
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
            const doc = await userRef.collection('appointment').doc();
            await doc.set({key: doc.id, clickDate, clickTime, clientName, clientContact})
        } 
        catch (err) {
            console.log(err); 
        }
    } 

    return userRef;
};



export const deletingFirebaseAppointment = ({currentMaster, clickDate, time}) => {
    
    if (!currentMaster.id) return;

    firestore.doc(`masters/${currentMaster.id}`).collection('appointment').get().then(async querySnapshot => {
        const appointment = await querySnapshot.docs.map(doc => doc.data());

        const filterAppointmentClient = await appointment.filter(appointment => appointment.clickDate === clickDate);

        const filterTime = await filterAppointmentClient.filter(appointment => appointment.clickTime === time);

        try {
            await firestore.doc(`masters/${currentMaster.id}`).collection('appointment').doc(filterTime[0].key).delete();
        } 
        catch (err) {
            if(err === 'Cannot read property "key" of undefined') {
                alert('Вашу запись удалить не удалось. Попробуйте еще раз.')
            }
        }
    });

}

export default firebase;