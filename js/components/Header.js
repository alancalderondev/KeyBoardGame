import {html, css, LitElement} from 'lit';
import DropDown from './DropDown'

customElements.define('drop-down',DropDown);

class Header extends LitElement{
    static properties = {
        userOptions:{type: Array}
    }

    constructor(){
        super();
        this.userOptions = [];//Aqui inicializamos nuestra propiedad
    }

    static styles = css`
        :host{
            display: block;
            background-color: #333;
            color:white;
        }
        a{
            text-decoration: none;
            color:white;
            font-size: 1.2rem;
            transition: color 0.3s ease;
        }

        a:hover{
            color:rgb(241, 231, 133);
        }

        nav{
            display:flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;
            width:100%;
        }

        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            max-width: 80%;
        }

        .mainMenu{
            display: flex;
            flex-direction: row;
            gap: 2rem;
        }

        drop-down{
            margin-left: 2rem;
        }
    `

    render(){
        return html`
            <nav rol='navigation'>
                <div class="container">
                    <div class="mainMenu">
                        <a href="/">HOME</a>
                        <a href="#">LEADERBOARD</a>
                    </div>
                    <drop-down></drop-down>
                </div>
            </nav>
        `;
    }

    firstUpdated(){
        const dropdownElement = this.shadowRoot.querySelector('drop-down');
        if(dropdownElement){
            //console.log(this.usserOptions);
            dropdownElement.data = this.userOptions;
        }
    }


    
}

export default Header;