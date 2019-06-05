import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatRoomList from '../shared/ChatRoomList.js';
import mockChatRoomsData from '../services/mock-chats.js';
import AddChatRoomInput from '../add/AddChatRoomInput.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const header = new Header();
        dom.prepend(header.render());

        const addChatRoomInput = new AddChatRoomInput();
        dom.appendChild(addChatRoomInput.render());

        const chatRoomList = new ChatRoomList({ chatRooms: mockChatRoomsData });
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
