import Component from '../Component.js';
import AnimalItem from './AnimalItem.js';

class AnimalList extends Component {
    renderHTML() {
        return `
            <section class="gallery">
                <ul class="horned-guys"></ul>
            </section>
        `;
    }

    onRender(dom) {
        const animal = this.props.images;

        animal.forEach(item => {
            const props = { item: item };
            const animalItem = new AnimalItem(props);
            const animalDom = animalItem.renderDOM();
            dom.appendChild(animalDom);
        });
    }
}

export default AnimalList;