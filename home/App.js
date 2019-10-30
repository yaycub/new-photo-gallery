import Component from '../Component.js';
import images from '../data/images.js';
import AnimalList from './AnimalList.js';
import FilterAnimals from './FilterAnimals.js';
import Header from './Header.js';

class App extends Component {
    onRender(dom){
        const header = new Header;
        const headerSection = header.renderDOM();
        dom.prepend(headerSection);

        const props = {
            images: images
        };

        const animalList = new AnimalList(props);
        const animalListSection = animalList.renderDOM();

        const listSection = dom.querySelector('.gallery');
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

                const updateProps = { images: filteredAnimals };
                animalList.update(updateProps);
            }
        });

        const filterAnimalsDom = filterHorns.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterAnimalsDom);

    }

    renderHTML() {
        return `
            <div>
                    <!-- Header goes here -->
            
                    <main>
                        <section class="options-section">
                            <!-- FilterCats goes here -->
                        </section>
                        <section class="gallery">
                            <!-- CatList goes here -->
                        </section>
                    </main>
                </div>
        `;
    }
}

export default App;