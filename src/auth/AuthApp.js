import Component from '../Component.js';

class AuthApp extends Component {
    
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <p>Please sign in to continue!</p>
                    <div id="firebaseui-auth-container"></div>
                </main>
            </div>
        `;

    }
}

export default AuthApp;