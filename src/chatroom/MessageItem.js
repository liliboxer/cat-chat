import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        const user = this.props.user;

        return /*html*/`
            <li>
                <div class="user-message">
                    <span class="user">${user.displayName}: </span>
                    <span class="message">${message.message}</span>
                </div>
                <span class="date">${message.date}</span>
            </li>
        `;

    }
}

export default MessageItem;