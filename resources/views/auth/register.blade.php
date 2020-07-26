@extends('layouts.app')

@section('content')
    <div class="Panel">
        <h1>Registro de usuarios</h1>
        <div class="Card Card-login">
           
            <form method="POST" action="{{ route('register') }}">
                @csrf

        

                <div>
                    <button type="submit" class="Button">
                        {{ __('Register') }}
                    </button>
                </div>
            </form>

        </div>
    </div>
@endsection