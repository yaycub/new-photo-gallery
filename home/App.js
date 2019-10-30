import Component from '../Component.js';
import images from '../data/images.js';
import AnimalList from './AnimalList.js';
import FilterAnimals from './FilterAnimals.js';
import Header from './Header.js';

class App extends Component {
    onRender(dom){
        const headerSection = Header.renderDom();
        dom.prepend(headerSection);

        const props = {
            images: images
        };

        const animalList = new AnimalList(props);
        const animalListSection = animalList.renderDOM();

        const listSection = dom.querySelector('.horned-guys');
        listSection.appendChild(animalListSection);

        const filterHorns = new FilterAnimals({
            images: images,
            onFilter: (keyword) => {
                let filteredAnimals;
                if (!keyword) {
                    filteredAnimals = images;
                }
                else {
                    filteredAnimals = images.filter(image => {
                        return image.keyword === keyword;
                    });
                }

                const updateProps = {images: filteredAnimals };
                animalList.update(updateProps);
            }
        });

        const filterAnimalsDom = filterHorns.renderDOM();


    }
}