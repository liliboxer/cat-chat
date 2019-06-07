import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddChatRoomInput extends Component {
    render() {
        const form = this.renderDOM();

        const newChatRoomInput = form.querySelector('input[name=name]');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newChatRoom = {
                roomName: formData.get('name')
            };

            const roomRef = roomsRef.push();
            roomRef.set({
                key: roomRef.key,
                uid: auth.currentUser.uid,
                name: newChatRoom.roomName
            });

            form.reset();
            newChatRoomInput.focus();
            document.activeElement.blur();

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-chat-room">
                <input name="name">
                <button>+</button>
            </form>
        `;

    }
}

export default AddChatRoomInput;