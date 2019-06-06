import '../utils/check-auth.js';
import ChatRoomApp from './ChatRoomApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new ChatRoomApp();
    root.appendChild(app.render());
});