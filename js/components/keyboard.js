import { html, css, LitElement } from 'lit';
import KeyLetter from './key';

customElements.define('key-content', KeyLetter);

class KeyBoard extends LitElement {
  static properties = {
    data: { type: Object }
  };

  static styles = css`
    .teclado {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      padding: 2rem;
      background: #1a1a1a;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    }

    .part-izq,
    .part-der {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .alfanumerico, .funcion, .especiales, .cursor {
      display: flex;
      flex-direction: row;
      gap: 6px;
      flex-wrap: wrap;
    }

    .funcion {
      margin-bottom: 0.5rem;
    }
  `;

  constructor() {
    super();
    this.data = {};
  }

  //Cuando se carga la página, agregamos un evento de escucha para detectar cuando se presione una tecla
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.keyPressDown);//Cuando se presione una tecla, se ejecuta el método _handleKeyDown
    window.addEventListener('keyup', this.keyPressUp);// Cuando se libere una tecla, se ejecuta el método _handleKeyUp
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.keyPressDown);
    window.removeEventListener('keyup', this.keyPressUp);
  }

  //Para cuando se presiona la tecla
  keyPressDown = (keyPressed) => {
    console.log(keyPressed.key);
    const keyElements = this.shadowRoot.querySelectorAll('key-content');
    keyElements.forEach(keyElement => {
      //Comparar si la tecla presionada es igual a la tecla del elemento
      if (keyPressed.key.toLowerCase() === keyElement.tecla.key.toString().toLowerCase()) {//Se comparan en minúsculas para evitar problemas con mayúsculas y minúsculas
        keyElement.setColor('#1fc49d');//Cambia el color de fondo de la letra
        keyElement.setPressed(true);//Le decimos que esta siendo presionada
      }
    });
  }

  //Para cuando se deja de presionar la tecla
  keyPressUp = (keyPressed) => {
    const keyElements = this.shadowRoot.querySelectorAll('key-content');
    keyElements.forEach(keyElement => {
      if (keyPressed.key.toLowerCase() === keyElement.tecla.key.toString().toLowerCase()) {
        keyElement.setColor('transparent');
        keyElement.setPressed(false);
      }
    });
  }

  render() {
    if (Object.keys(this.data).length > 0) {
      //Recorro el array que obtuve del JSON
        const generateContent = (array) => {
          //Por cada categoria (alfanumerico, especiales, cursor, funcion)
            return array.map(letra => {
                //Uno los objetos del array con lo del json que es la letra (Q,W,E, etc)
                const objeto = {...letra, tamano: (letra.key.length > 3 ? 100 : 55)};//El 100 es para las letras mas largas
                return html`<key-content .tecla="${objeto}"></key-content>`;//Creo el componente key-content con el objeto para invocarlo en el html
            });
        };

        //Por cada categoria (alfanumerico, especiales, cursor, funcion) hay una constante y esta tiene el array de components de las teclas
        const alphanumericContent = generateContent(this.data.alfanumeric);
        const specialContent = generateContent(this.data.especials);
        const cursorContent = generateContent(this.data.cursor);
        const funcionContent = generateContent(this.data.function);

        return html`
            <div class="teclado">
              <div class="part-izq">
                <div class="funcion">
                  ${funcionContent}
                </div>
                <div class="alfanumerico">
                  ${alphanumericContent}
                </div>
              </div>
              <div class="part-der">
                <div class="especiales">
                  ${specialContent}
                </div>
                <div class="cursor">
                  ${cursorContent}
                </div>
              </div>
            </div>
        `;
    }
    return html``;
  }
}

export default KeyBoard;