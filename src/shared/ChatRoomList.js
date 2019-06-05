import Component from '../Component.js';
import ChatRoomItem from './ChatRoomItem.js';

class ChatRoomList extends Component {
    render() {
        const list = this.renderDOM();
        const chatRooms = this.props.chatRooms;
        const onRemove = this.props.onRemove;

        chatRooms.forEach(chatRoomParam => {
            const chatRoomItem = new ChatRoomItem({ chatRoom: chatRoomParam, onRemove });
            list.appendChild(chatRoomItem.render());
        });


        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="ChatRooms-list"></ul>
        `;

    }
}

export default ChatRoomList;
