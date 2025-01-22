import {html, css, LitElement} from 'lit';

class DropDown extends LitElement{

    static properties = {
        data: {type: Array},
    };

    constructor(){
        super();
        this.data = [];
    }

    static styles= css`
        .dropdown{
            position: relative;
            display: inline-block;
        }
        .dropdown-content{
            display:none;
            position: absolute;
            background-color: #aaaaaa;
            min-width: 100px;
            box-shadow: 0px 8px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            z-index: 1;
        }

        .dropdown:hover .dropdown-content{
            display:block;
        }

        .dropdown-content a{
            color:white;
            padding: 12px 16px;
            text-decoration: none;
            display:block;
            transition: color 1s ease;
        }

        .dropdown-content a:hover{
            color:rgb(241, 231, 133);
        }

        span{
            font-size: 1.2rem;
            transition: color 0.3s ease;
        }

        span:hover{
            color:rgb(241, 231, 133);
        }
    `;

    render(){
       if(this.data.length >0){
            return html`
            ${this.data.map(item => html`
                <div class="dropdown">
                    <span>${item.principal}</span>
                    <div class="dropdown-content">
                        ${item.options.map(option => html`
                            <a href="${option.href}">${option.name}</a>
                        `)}
                    </div>
                </div>
            `)}
            `;
        }else{
            return html`<p class="error">Error</p>`;
        }
    }
}

export default DropDown;