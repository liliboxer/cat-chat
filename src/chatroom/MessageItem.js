import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        console.log(message);
        return /*html*/`
            <li>${message.name}: ${message.message}</li>
        `;

    }
}

export default MessageItem;