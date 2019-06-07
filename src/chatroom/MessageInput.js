import Component from '../Component.js';
import { auth, messagesByRoomRef } from '../services/firebase.js';

class MessageInput extends Component {
    render() {
        const form = this.renderDOM();

        const key = this.props.key;
        
        const messagesRef = messagesByRoomRef.child(key);

        const input = form.querySelector('input');

        const avatar = auth.currentUser.photoURL || './assets/icon.png';
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const messages = messagesRef.push();
            
            messages.set({
                owner: auth.currentUser.uid,
                message: input.value,
                name: auth.currentUser.displayName,
                photo: avatar,
                date: Date()
            });

            form.reset();
            input.focus();
            form.blur();
        });

        
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="message-input">
                <input name="message">
                <button> 
                    <img class="airplane" src="../../assets/send.png">
                </button>
            </form> 
        `;
    }
}

export default MessageInput;
