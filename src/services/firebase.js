const config = {
    apiKey: 'AIzaSyBiRYsOJp-ciNM0INgEb4tiqw8_EIM7l2g',
    authDomain: 'lili-chat-room.firebaseapp.com',
    databaseURL: 'https://lili-chat-room.firebaseio.com',
    projectId: 'lili-chat-room',
    storageBucket: 'lili-chat-room.appspot.com',
    messagingSenderId: '748662566299',
    appId: '1:748662566299:web:29c8a118b7f1859c'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.database();
export const roomsRef = db.ref('rooms');


window.db = db;