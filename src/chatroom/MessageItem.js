import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        return /*html*/`
            <li>
                <span class="user">${message.name}: </span>
                <span class="message">${message.message}</span>
                <br class="date">${message.date}</br>
            </li>
        `;

    }
}

export default MessageItem;