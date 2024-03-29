import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class ChatRoomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('button');
        const chatRoom = this.props.chatRoom;
        
        const roomRef = roomsRef.child(chatRoom.key);

        removeButton.addEventListener('click', () => {
            if(auth.currentUser.uid === chatRoom.owner) {
                roomRef.remove();
            } else {
                alert(`THIS AIN'T YO CHAT TO DELETE!`);
            }
        });

        return dom;
    }

    renderTemplate() {
        const chatRoom = this.props.chatRoom;
        return /*html*/`
            <div>
                <li class="room-name"><a href="./chatroom.html?key=${chatRoom.key}">${chatRoom.name}</a> <span><button class="remove-button">X</button></span></li>
            </div>
        `;
    }
}

export default ChatRoomItem;