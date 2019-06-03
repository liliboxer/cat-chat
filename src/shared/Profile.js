import Component from '../Component.js';

class Profile extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="profile">
                <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968">
                <span>Lili</span>
                <button>Sign Out</button>
            </div>
        `;

    }
}

export default Profile;