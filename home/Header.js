import Component from '../Component.js';

class Header extends Component {
    renderHTML(){
        return `
            <header>
                <img src="./assets/devil.jpg" id="devil">
                <h1>Horned Animal Gallery</h1>
            </header>
        `;
    }
}

export default Header;