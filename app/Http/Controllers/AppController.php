<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class AppController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function index()
    {
        $videoId = "NDmwjPAXYsE";
        $thumbnail_url = "https://img.youtube.com/vi/".$videoId."/maxresdefault.jpg";

        $client = new Client();

        $response = $client->request('GET', $thumbnail_url, ['verify' => false]);
        $response_code = $response->getStatusCode();

        return Inertia::render('App/Index', [
            'thumbnail' => $thumbnail_url
        ]);
    }
}
