import {LitElement, css, html} from 'lit-element';

class ArtBoxInfo extends LitElement {


    static get properties() {
        return {
            message: {type: String},
        }
    }

    constructor() {
        super();
        this.message = "Hola a todos"
    }

    static get styles() {
        return css `
            :host {
                display: block;
            }

            p {
                font-size: 1.5rem;
                color: black;
            }
        `;
    }

    render() {
        return html`
            <p>${this.message}</p>
        `;
    }

}

customElements.define('art-box-info', ArtBoxInfo);