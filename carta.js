class CartaComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <h2>Carta</h2>
        <plato-component nombre="Ensalada" imagen="media/amanida.jpg" precio="10" alergenos="Gluten"></plato-component>
        <plato-component nombre="Paella" imagen="media/paella.jpg" precio="12" alergenos="Lactosa"></plato-component>
        <plato-component nombre="Helado" imagen="media/gelat.jpg" precio="8" alergenos="Nueces"></plato-component>
        <plato-component nombre="Cocacola" imagen="media/cocacola.png" precio="15" alergenos="Gluten"></plato-component>
        <plato-component nombre="Pasta Carbonara" imagen="media/carbonara.jpg" precio="10" alergenos="Huevo, Lactosa"></plato-component>
        <plato-component nombre="Sushi" imagen="media/sushi.jpg" precio="18" alergenos="Pescado, Soja"></plato-component>
        <plato-component nombre="Pizza" imagen="media/pizza.jpg" precio="14" alergenos="Gluten, Lactosa"></plato-component>
        <plato-component nombre="Hamburguesa" imagen="media/hamburguesa.jpg" precio="12" alergenos="Gluten, Lactosa"></plato-component>
        <plato-component nombre="Tacos" imagen="media/tacos.jpg" precio="10" alergenos="Gluten, Lactosa"></plato-component>
      <plato-component nombre="Lasagna" imagen="media/lasagna.jpg" precio="15" alergenos="Gluten, Lactosa"></plato-component>
      `;
    }
  }
  
  customElements.define('carta-component', CartaComponent);
