import Component from '../Component.js';

class AnimalItem extends Component {
    renderHTML() {
        const image = this.props.item;
        return `
        <li>
            <div class="title-container">
                <div class="image-desc">
                    <span class="desc-text">${image.description}</span>
                </div>
                <h2>${image.title}</h2>
            </div>
            <div class="animal-image">
                <img src="${image.url}" alt="${image.title} image" class="image-con">
            </div>
            <p class="horns">Horns: ${image.horns}</p>
        </li>
        `;
    }
}

export default AnimalItem;