<nav class="Nav Nav-main" role="navigation">
  <div class="Nav-wrapper container">
    <div class="Nav-title">
      SITIOWEB
    </div>

    <art-user-control>
      <ul class="Nav-actions" slot="loginlinks">
        <li><a href="{{ route('login') }}" id="loginlink">{{ __('Login') }}</a></li>
        <li><a href="{{ route('register') }}">{{ __('Register') }}</a></li>
      </ul>
      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
          @csrf
      </form>
      <div slot="logininputs" class="form-field">
        <p>
            <input type="text" id="loginemail" placeholder="Email"> 
        </p>
        <p>
          <input type="password" id="loginpass" placeholder="Clave">
        </p>
      </div>
    </art-user-control>
  </div>
</nav>