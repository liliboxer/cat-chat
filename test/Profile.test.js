import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('profile component');


test('render user props', assert => {
    
    const user = {
        displayName: 'Lili',
        photoURL: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968'
    };
    
    const profile = new Profile({ user });

    const expected = /*html*/ `
        <div class="profile">
            <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968">
            <span>Lili</span>
            <button>Sign Out</button>
        </div>
    `;

    const rendered = profile.renderTemplate();

    assert.htmlEqual(rendered, expected);

});

test('render user who has no profile pic', assert => {
    
    const user = {
        displayName: 'Lili',
        photoURL: null
    };
    
    const profile = new Profile({ user });

    const expected = /*html*/ `
        <div class="profile">
            <img src="./assets/icon.png">
            <span>Lili</span>
            <button>Sign Out</button>
        </div>
    `;

    const rendered = profile.renderTemplate();

    assert.htmlEqual(rendered, expected);

});

test('renders empty div with no user', assert => {
    
    const user = null;
    
    const profile = new Profile({ user });

    const expected = `<div></div>`;

    const rendered = profile.renderTemplate();

    assert.htmlEqual(rendered, expected);

});