import { LitElement, html, css } from 'lit-element';
import { DileSlideDownMixin } from '@dile/dile-slide-down-mixin';

class ArtInfoBox  extends DileSlideDownMixin(LitElement) {

    static get styles() {
        return css`
            :host {
                display: block;
                --art-icon-color: var(--art-info-box-icon-color, #5e92f3);
                text-align: var(--art-info-box-align, left);
                color: var(--art-info-box-color, #303030);
            }
            #all {
                position: relative;
                transition: height 0.8s ease-in;
                overflow: hidden;
            }
            .box {
                border-radius: 0.6rem;
                padding: 5px 5px 5px 15px;
                background-color: var(--art-info-box-background-color, #ddd);
            }
            .flexcontent {
                display: flex;
                align-items: center;
            }
            .exit {
                position: absolute;
                top: 2px;
                right: 2px;
                --art-icon-color: var(--art-info-box-close-icon-color, #f55);
                z-index: 1;
                cursor: pointer;
            }
            .title {
                margin-bottom: 15px;
                font-size: 1.3em;
                font-weight: 300;
            }
            .content {
                flex-grow: 1;
            }
            .closed {
                display: none;
            }
            .infoicon {
                margin: 0 5px 0 -10px;
            }
            .infoicon art-icon {
                position: relative;
                top: 2px;
            }
            @media (min-width: 400px) {
                .box {
                    --art-icon-size: 26px;
                }
                .infoicon {
                    margin: 0 5px 0 -5px;
                }
            }
            @media (min-width: 500px) {
                .box {
                    --art-icon-size: 28px;
                }
                .infoicon {
                    margin: 0 15px 0 0px;
                }
            }
        `;
    }

    static get properties() {
        return {
            showCloseButton: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.showCloseButton = false;
    }

    render() {
        return html`
            <section id="all">
                ${this.showCloseButton
                    ? html`
                          <span class="exit" @click="${this.close}"
                              ><art-icon icon="cancel"></art-icon
                          ></span>
                      `
                    : ""}
                <div class="box">
                    ${this.title
                        ? html`
                              <div class="title">${this.title}</div>
                          `
                        : ""}
                    <div class="flexcontent">
                        <span class="infoicon"
                            ><art-icon icon="info"></art-icon
                        ></span>
                        <div class="content">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    close() {
        let element = this.shadowRoot.getElementById("all");
        this.slideHide(element);
    }
}

customElements.define('art-info-box', ArtInfoBox);