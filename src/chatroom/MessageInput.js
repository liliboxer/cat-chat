import Component from '../Component.js';

class MessageInput extends Component {
    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();
            console.log('hi');
        });
        
        return form;
    }

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