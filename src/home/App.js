import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatRoomList from '../shared/ChatRoomList.js';
import AddChatRoomInput from '../add/AddChatRoomInput.js';
import { roomsRef } from '../services/firebase.js';


class App extends Component {
    render() {
        const dom = this.renderDOM();
        const header = new Header();
        dom.prepend(header.render());

        const addChatRoomInput = new AddChatRoomInput();

        roomsRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const chatRooms = value ? Object.values(value) : [];
                chatRoomList.update({ chatRooms });
            });

        dom.appendChild(addChatRoomInput.render());

        const chatRoomList = new ChatRoomList({ chatRooms: [] });

        dom.appendChild(chatRoomList.render());

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

export default App;
