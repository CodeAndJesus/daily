import { LitElement, html, css } from 'lit-element';
import './art-login-modal';
import './art-user-menu'; 

class ArtUserControl  extends LitElement {

    static get styles() {
        return css`
          :host {
            display: flex;
            align-items: stretch;
          }
          .logoutelement {
            display: flex;
            align-items: center;
            --art-button-border: 1px solid #fff;
          }
        `;
      }
    
      static get properties() {
        return {
          loggedIn: { type: Boolean },
          userData: { type: Object },
        };
      }
    
      constructor() {
        super();
        this.loggedIn = false;
      }
    
      firstUpdated() {
         this.querySelector("#loginlink").addEventListener(
          "click",
          this.loginRequest.bind(this)
        );
        this.elmodal = this.shadowRoot.getElementById("elmodal"); 
        //this.getUser();
      }
    
      stateChanged(state) {
        this.loggedIn = state.user.loggedIn;
        this.userData = state.user.userData;
      }
    
      render() {
        return html`
          ${this.loggedIn ? this.templateUser : this.templateLogin}
          <art-login-modal id="elmodal" @login-valid="${this.loginValid}">
          <slot name="logininputs"></slot>
          </art-login-modal>
          ${this.templateUser}
        `;
      }
    
      get templateLogin() {
        return html`
          <slot name="loginlinks"></slot>
        `;
      }
    
      get templateUser() {
        return html`
          <div class="logoutelement">
            <art-user-menu .userData="${this.userData}"></art-user-menu>
          </div>
        `;
      }
    
      loginRequest(e) {
        e.preventDefault();
        this.elmodal.open();
        //store.dispatch(changeLoginVisibility(true));
      }
    
      loginValid(e) {
        this.userData = e.detail.user;
        this.loggedIn = true;
      }
    
      getUser() {
        //store.dispatch(getUser());
      }
}

customElements.define('art-user-control', ArtUserControl);