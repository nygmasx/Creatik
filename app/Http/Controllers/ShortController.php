<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShortController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('App/Short/Index');
    }
}
