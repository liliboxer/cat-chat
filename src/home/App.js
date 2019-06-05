import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatRooms from '../shared/ChatRooms.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const header = new Header();
        dom.prepend(header.render());

        const chatRoom = new ChatRooms();
        dom.appendChild(chatRoom.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;

    }
}

export default App;
