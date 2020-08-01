@extends('layouts.app')

@section('content')

<div class="Panel">
    <h1 class="Card">Bienvenidos a el sitio web</h1>

    <x-hi-component name="Arturo"></x-hi-component>
</div>

<art-box-info  message="Este es otro mensaje"></art-box-info>




@endsection
