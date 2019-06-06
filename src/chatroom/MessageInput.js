import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class MessageInput extends Component {
    render() {
        const form = this.renderDOM();

        const roomRef = this.props.roomRef;

        const messagesRef = roomRef.child('messages');
        
        form.addEventListener('submit', event => {
            event.preventDefault();
    
            const messages = messagesRef.push();
            
            messages.set({
                owner: auth.currentUser.uid,
                
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