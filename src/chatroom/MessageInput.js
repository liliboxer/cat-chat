import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class MessageInput extends Component {
    render() {
        const form = this.renderDOM();

        const roomRef = this.props.roomRef;

        const messagesRef = roomRef.child('messages');

        const input = form.querySelector('input');
        
        form.addEventListener('submit', event => {
            event.preventDefault();
    
            const messages = messagesRef.push();
            
            messages.set({
                owner: auth.currentUser.uid,
                message: input.value           
            });

        });
        
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input name="message">
                <button>Send</button>
            </form>
        `;

    }
}

export default MessageInput;