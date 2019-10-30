import Component from '../Component.js';

class AnimalItem extends Component {
    renderHTML() {
        const animal = this.props.animal;

        return `
        <li>
            <div class="title-container">
                <div class="image-desc">
                    <span class="desc-text">${animal.description}</span>
                </div>
                <h2>${animal.title}</h2>
            </div>
            <div class="animal-image">
                <img src="${animal.url}" alt="${animal.title} image" class="image-con">
            </div>
            <p class="horns">Horns: ${animal.horns}</p>
        </li>
        `;
    }
}

export default AnimalItem;