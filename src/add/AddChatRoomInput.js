import Component from '../Component.js';

class AddChatRoomInput extends Component {
    renderTemplate() {
        return /*html*/`
            <form class="add-chat-room">
                <input>
                <button>+</button>
            </form>
        `;

    }
}

export default AddChatRoomInput;