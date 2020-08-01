<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        session()->flash('status', 'Bienvenido a la home!');
        return view('home');
    }

    public function vista(){

        session()->flash('success', 'Bienvenido a la vista!');
        return view('test.vista');
    }

    public function error(){

        session()->flash('error', 'Bienvenido a la vista de error!');
        return view('test.vista');
    }

}
