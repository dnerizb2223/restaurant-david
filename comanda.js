class ComandaComponent extends HTMLElement {
    constructor() {
      super();
      this.platosSeleccionados = [];
      this.total = 0;
    }
  
    connectedCallback() {
      this.innerHTML = `
        <h2>Comanda</h2>
        <div id="platos-comanda"></div>
        <p>Total: <span id="total">0</span>€</p>
      `;
    }
  
    renderPlatos() {
      const platosComanda = this.querySelector('#platos-comanda');
      platosComanda.innerHTML = '';
  
      const platosContados = {};
      this.platosSeleccionados.forEach(plato => {
        const key = plato.nombre; // Usar el nombre del plato como clave
        if (!platosContados[key]) {
          platosContados[key] = 0;
        }
        platosContados[key] += plato.cantidad; // Incrementar la cantidad del plato
      });
  
      Object.entries(platosContados).forEach(([nombre, cantidad]) => {
        const platoElement = document.createElement('div');
        platoElement.innerHTML = `
          <p>${nombre} - Cantidad: ${cantidad}</p>
        `;
        platosComanda.appendChild(platoElement);
      });
  
      this.updateTotal();
    }
  
    updateTotal() {
      const totalElement = this.querySelector('#total');
      this.total = this.platosSeleccionados.reduce((acc, plato) => acc + (plato.precio * plato.cantidad), 0);
      totalElement.textContent = this.total.toFixed(2);
    }
  
    addPlato(plato) {
      this.platosSeleccionados.push(plato);
      this.renderPlatos();
      this.updateTotal();
    }
  }
  
  customElements.define('comanda-component', ComandaComponent);
  