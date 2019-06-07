import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class MessageInput extends Component {
    render() {
        const form = this.renderDOM();

        const roomRef = this.props.roomRef;

        const messagesRef = roomRef.child('messages');

        const input = form.querySelector('input');

        const avatar = auth.currentUser.photoURL || './assets/icon.png';

        const date = new Date();
        
        form.addEventListener('submit', event => {
            event.preventDefault();
    
            const messages = messagesRef.push();
            
            messages.set({
                owner: auth.currentUser.uid,
                message: input.value,
                name: auth.currentUser.displayName,
                photo: avatar,
                date: date
            });

            form.reset();
            input.focus();
            document.activeElement.blur();
        });

        
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="message-input">
                <input name="message">
                <button>Send</button>
            </form>
        `;

    }
}

export default MessageInput;

