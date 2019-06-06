import Component from '../Component.js';

class MessageInput extends Component {
    renderTemplate() {
        return /*html*/`
            <form>
                <input name="message">
                <button>Send</button>
            </form>
        `;

    }
}

export default MessageInput;