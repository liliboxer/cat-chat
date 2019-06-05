import Component from '../Component.js';

class AddChatRoomInput extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        const newChatRoomInput = form.querySelector('input[name=name]');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newChatRoom = {
                roomName: formData.get('name')
            };

            onAdd(newChatRoom);

            form.reset();
            newChatRoomInput.focus();
            document.activeElement.blur();

            console.log(newChatRoom);

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