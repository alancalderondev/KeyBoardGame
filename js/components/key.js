import {html, css, LitElement} from 'lit'

class KeyLetter extends LitElement {
    static properties = {
        tecla: { type: Object },
        colorFondo: { type: String },
        isPressed: { type: Boolean }
    }

    static styles = css`
        .key {
            border: 2px solid #333;
            border-radius: 6px;
            color: #ffffff;
            display: inline-flex;
            font-size: 14px;
            height: 45px;
            text-align: center;
            align-items: center;
            justify-content: center;
            margin: 2px;
            letter-spacing: 0.5px;
            background-color: #2a2a2a;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            transition: all 0.1s ease;
            user-select: none;
            position: relative;
            overflow: hidden;
            flex: 1;
            min-width: 45px;
        }

        .key::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
            pointer-events: none;
        }

        .key.pressed {
            transform: translateY(2px);
            box-shadow: 0 0 2px rgba(0,0,0,0.2);
            border-color: #1fc49d;
        }

        p {
            margin: 0;
            padding: 0 8px;
            font-family: 'Arial', sans-serif;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `;

    constructor() {
        super();
        this.tecla = {};
        this.colorFondo = 'transparent';
        this.isPressed = false;
    }

    setColor(color) {
        this.colorFondo = color;
    }

    setPressed(pressed) {
        this.isPressed = pressed;
    }

    render() {
        if(Object.keys(this.tecla).length > 0) {
            return html`
                <div class="key ${this.isPressed ? 'pressed' : ''}" 
                     style="background-color: ${this.colorFondo}">
                    <p id="tecla-${this.tecla.key}">${this.tecla.key}</p>
                </div>
            `;
        }
        return html``;
    }
}

export default KeyLetter;