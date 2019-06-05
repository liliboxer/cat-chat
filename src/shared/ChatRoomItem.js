import Component from '../Component.js';

class ChatRoomItem extends Component {
    renderTemplate() {
        const chatRoom = this.props.chatRoom;
        
        return /*html*/`
            <div>
                <li>${chatRoom.roomName}</li>
            </div>
        `;
    }
}

export default ChatRoomItem;