import { app } from '../src/services/firebase.js'; 
import './html-equal.js';
import './html-equal.test.js';
import './Profile.test.js';

QUnit.done(() => {
    app.delete();
}); 