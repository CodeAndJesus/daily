import { LitElement, html, css } from 'lit-element';
import '../icons/art-icon';

class ArtButton  extends LitElement {

    static get styles() {
        return css`
          :host {
            display: inline-block;
            --art-icon-size: var(--art-button-icon-size, 1.2em);
            --art-icon-color: var(--art-button-icon-color, #fff);
          }
          art-icon {
            position: relative;
            top: 3px;
            margin-right: 4px;
          }
          button {
            cursor: pointer;
            display: inline-block;
            text-transform: uppercase;
            border-radius: var(--art-button-border-radius, 4px);
            padding-top: var(--art-button-padding-y, 7px);
            padding-bottom: var(--art-button-padding-y, 7px);
            padding-left: var(--art-button-padding-x, 10px);
            padding-right: var(--art-button-padding-x, 10px);
            transition: all 0.2s ease-in;
            -webkit-transition: all 0.2s ease-in;
            background-color: var(--art-button-background-color, var(--secondary-color));
            color: var(--art-button-text-color, #fff);
            font-size: var(--art-button-font-size, 0.9em);
            border: var(--art-button-border, none);
            line-height: 1.5em;
          }
          button:hover {
            background-color: var(--art-button-hover-background-color, var(--secondary-light-color));
            color: var(--art-button-hover-text-color, #ffff);
            --art-icon-color: var(--art-button-hover-text-color);
          }
          button.disabled:hover {
            background-color: var(--art-button-background-color, #303030);
            color: var(--art-button-text-color, #fff);
            --art-icon-color: var(--art-button-hover-text-color);
          }
          .disabled {
            opacity: 0.5;
          }
        `;
      }
    
      static get properties() {
        return {
          icon: { type: String },
          disabled: { type: Boolean }
        };
      }
    
      constructor() {
        super();
        this.icon = "";
      }
    
      render() {
        return html`
          <button class="${this.disabled ? "disabled" : ""}" @click=${this.doClick}>
            ${this.icon
              ? html`
                  <art-icon icon="${this.icon}"></art-icon>
                `
              : ""}
            <slot></slot>
          </button>
        `;
      }
    
      doClick(e) {
        if (this.disabled) {
          e.stopPropagation();
          this.dispatchEvent(
            new CustomEvent("art-button-clicked-but-disabled", {
              bubbles: true,
              composed: true
            })
          );
        }
      }
}

customElements.define('art-button', ArtButton);