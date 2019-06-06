import Component from '../Component.js';
import Header from '../shared/Header.js';
import MessageInput from './MessageInput.js';
import { roomsRef } from '../services/firebase.js';
import QUERY from '../../test/QUERY.js';
import MessageList from '../chatroom/MessageList.js';

class ChatRoomApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        main.prepend(header.render());

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const roomRef = roomsRef.child(searchParams.key);

        roomRef 
            .on('value', snapshot => {
                const value = snapshot.val();
                const messages = value.messages ? Object.values(value.messages) : [];
                header.update({ title: value.name });
                messageList.update({ messages: messages });
            });
        
        const messageInput = new MessageInput({ roomRef });
        main.appendChild(messageInput.render());

        const messageList = new MessageList({ messages: [] });
        main.appendChild(messageList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;

    }
}

export default ChatRoomApp;