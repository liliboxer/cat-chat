import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatRoomList from '../shared/ChatRoomList.js';
import mockChatRoomsData from '../services/mock-chats.js';
import AddChatRoomInput from '../add/AddChatRoomInput.js';
import api from '../services/chatroom-api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const header = new Header();
        dom.prepend(header.render());

        let chatRooms;
        const chatRoomsInLocalStorage = api.getChatRooms();

        if(chatRoomsInLocalStorage) {
            chatRooms = chatRoomsInLocalStorage;
        } else {
            chatRooms = mockChatRoomsData;
        }

        const addChatRoomInput = new AddChatRoomInput({
            onAdd: newChatRoom => {
                chatRooms.unshift(newChatRoom);
                api.saveChatRooms(chatRooms);
                chatRoomList.update({ chatRooms });
            }
        });

        dom.appendChild(addChatRoomInput.render());

        const chatRoomList = new ChatRoomList({ 
            chatRooms: mockChatRoomsData,
            onRemove: (chatRoomToRemove) => {
                const index = chatRooms.indexOf(chatRoomToRemove);
                chatRooms.splice(index, 1);
                api.saveChatRooms(chatRooms);
                chatRoomList.update({ chatRooms });
            }
        });

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
