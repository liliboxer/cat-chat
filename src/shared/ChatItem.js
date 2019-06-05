import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        return /*html*/`
            <div>
                <li>chat abot your cat</li>
                <li>chat about the weather</li>
                <li>chat about what you ate for dinner last night</li>
            </div>
        `;

    }
}

export default ChatItem;