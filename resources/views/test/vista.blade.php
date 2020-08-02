@extends('layouts.app')

@section('content')
        <br>
        @if (session('success'))
            <art-info-box showCloseButton>
                {{ session('success') }}
            </art-info-box>
            <br>
        @endif                   
@endsection