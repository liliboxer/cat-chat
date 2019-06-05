import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth, roomsRef } from '../services/firebase.js';
import ChatRoomItem from '../shared/ChatRoomItem.js';

class ChatRoomApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        dom.prepend(header.render());

        const chatRoomItem = new ChatRoomItem();
        dom.appendChild(chatRoomItem.render());

        roomsRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const chatRoom = value ? Object.value(value) : [];
                chatRoomItem.update({ chatRoom });
            });

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