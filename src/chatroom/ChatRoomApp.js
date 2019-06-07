import Component from '../Component.js';
import Header from '../shared/Header.js';
import MessageInput from './MessageInput.js';
import { roomsRef, messagesByRoomRef } from '../services/firebase.js';
import QUERY from '../../test/QUERY.js';
import MessageList from '../chatroom/MessageList.js';

class ChatRoomApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        main.prepend(header.render());

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const roomMessagesRef = messagesByRoomRef.child(searchParams.key);

        const roomRef = roomsRef.child(searchParams.key);

        roomMessagesRef 
            .on('value', snapshot => {
                const value = snapshot.val();
                const messages = value ? Object.values(value) : [];
                messageList.update({ messages: messages });
            });
            
        roomRef
            .on('value', snapshot => {
                const value = snapshot.val();
                header.update({ title: value.name });

            });
        
        const messageInput = new MessageInput({ 
            roomMessagesRef,
            key: searchParams.key      
        });

        main.appendChild(messageInput.render());

        const messageList = new MessageList({ messages: [] });
        main.appendChild(messageList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main> <a href="./"><button class="home-button">Return to Chatrooms</button></a></main>
               
            </div>
        `;

    }
}

export default ChatRoomApp;