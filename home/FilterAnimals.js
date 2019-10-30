import Component from '../Component.js';

class FilterAnimals extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return `
            <section class="filter">
                <select type="select" class="keyword-select">
                    <option value="" selected>All Types</option>
                    <option value="narwhal">Narwhals</option>
                    <option value="rhino">Rhinos</option>
                    <option value="unicorn">Unicorns</option>
                    <option value="unilego">Unilego</option>
                    <option value="triceratops">Triceratops</option>
                    <option value="markhor">Markhor</option>
                    <option value="mouflon">Mouflon</option>
                    <option value="addax">Addax</option>
                    <option value="chameleon">Chameleon</option>
                    <option value="lizard">Lizard</option>
                    <option value="dragon">Dragon</option>
                </select>
            </section>
        `;
    }
}

export default FilterAnimals;