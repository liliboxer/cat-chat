import Component from '../Component.js';
import MessageItem from './MessageItem.js';
import { usersRef } from '../services/firebase.js';

class MessageList extends Component {
    render() {
        const dom = this.renderDOM();  

        const messages = this.props.messages;

        if(!messages) {
            return dom;
        }

        messages.forEach(message => {
            const messageItem = new MessageItem({ message, user: {} });
            dom.appendChild(messageItem.render());

            usersRef
                .child(message.owner)
                .on('value', snapshot => {
                    const value = snapshot.val();
                    messageItem.update({ user: value });
                });

        });
        
        setTimeout(() => {
            dom.scrollTop = dom.scrollHeight;
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="message-list"></ul>
        `;

    }
}

export default MessageList;