import { LitElement, html, css } from 'lit-element';
import { iconsLibrary } from './icons';
class ArtIcon  extends LitElement {

    static get styles() {
        return css`
            :host[hidden] {
                display: none;
            }
            :host {
                display: inline-block;
            }
            path {
                fill: var(--art-icon-color, #888);
                transition: fill 0.3s ease;
            }
            path[fill="none"] {
                fill: transparent;
            }
            svg {
                width: var(--art-icon-size, 24px);
                height: var(--art-icon-size, 24px);
            }
            div {
                display: flex;
            }
        `;
      }
    
      static get properties() {
        return {
            icon: { type: String }
        };
      }
    
      constructor() {
        super();
        this.icon = "info";
      }
    
      render() {
        return html`
            <div>
                ${iconsLibrary[this.icon]}
            </div>
        `;
      }
}

customElements.define('art-icon', ArtIcon);