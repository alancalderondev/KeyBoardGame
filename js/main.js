import Header from "../components/Header";
import KeyBoard from "../components/keyboard";

customElements.define('header-section',Header);
console.log("main.js cargado");

const headerElement = document.querySelector('header-section');
if(headerElement){
    const opcionesdwn = [
        {principal: 'ACCES', options:[
            {name: 'Register', href: '/register'},
            {name: 'Login', href: '/login'}
        ]
    }];
    headerElement.userOptions = opcionesdwn;
}

customElements.define('teclado-section',KeyBoard)

fetch('./JSON/teclas.json')
    .then(response => {
        if(response.ok)
            return response.json()
    })
    .then(teclas => {
        //console.log(teclas);
        const tecladoElement = document.querySelector('teclado-section');
        if(tecladoElement)
            tecladoElement.data = teclas;
    })
    .catch(error =>{
        console.error('Error al cargar el archivo JSON: ',error);
    })

