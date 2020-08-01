@extends('layouts.app')

@section('content')

    
    <form method="POST" action="/template_laravel/public/vista">
            @csrf
        <div>
            <button type="submit" class="Button">
                acceder a vista
            </button>
        </div>
    </form>
    <br>

    <form method="POST" action="/template_laravel/public/error">
            @csrf
        <div>
            <button type="submit" class="Button">
                acceder a error
            </button>
        </div>
    </form>
        

                    
@endsection
