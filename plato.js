class PlatoComponent extends HTMLElement {
    constructor() {
      super();
      this.plato = {
        nombre: this.getAttribute('nombre'),
        imagen: this.getAttribute('imagen'),
        precio: parseFloat(this.getAttribute('precio')), // Parsear el precio como número
        alergenos: this.getAttribute('alergenos').split(',')
      };
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div>
          <h3>${this.plato.nombre}</h3>
          <img src="${this.plato.imagen}" alt="${this.plato.nombre}">
          <p>Precio: ${this.plato.precio.toFixed(2)}€</p> <!-- Mostrar el precio con 2 decimales -->
          <p>Alergenos: ${this.plato.alergenos.join(', ')}</p>
          <input type="number" value="1" min="1">
          <button class="add-to-cart">Añadir a la comanda</button>
        </div>
      `;
      this.querySelector('.add-to-cart').addEventListener('click', () => {
        this.agregarPlato();
      });
    }
  
    agregarPlato() {
      const cantidad = parseInt(this.querySelector('input').value);
      const plato = {
        ...this.plato,
        cantidad: cantidad
      };
      const comandaComponent = document.querySelector('comanda-component');
      comandaComponent.addPlato(plato);
    }
  }
  
  customElements.define('plato-component', PlatoComponent);
  