import Component from '../Component.js';

class ChatRoomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('button');
        const onRemove = this.props.onRemove;
        const chatRoom = this.props.chatRoom;

        removeButton.addEventListener('click', () => {
            onRemove(chatRoom);
        });

        return dom;
    }

    renderTemplate() {
        
        return /*html*/`
            <div>
                <li><a href=""></a> <span><button class="remove-button">X</button></span></li>
            </div>
        `;
    }
}

export default ChatRoomItem;