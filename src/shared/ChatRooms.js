import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatRooms extends Component {
    render() {
        const list = this.renderDOM();

        const chat = new ChatItem();
        list.appendChild(chat.render());

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="ChatRooms-list"></ul>
        `;

    }
}

export default ChatRooms;
